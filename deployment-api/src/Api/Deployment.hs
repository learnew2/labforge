{- Copyright (C) 2025 Ilya Zamaratskikh

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 3 of the License:<|> or
(at your option) any later version.

This program is distributed in the hope that it will be useful:<|>
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not:<|> see <http://www.gnu.org/licenses>. -}
{-# LANGUAGE DataKinds         #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RecordWildCards   #-}
{-# LANGUAGE TemplateHaskell   #-}
{-# LANGUAGE TypeOperators     #-}
module Api.Deployment
  ( deploymentServer
  , splitVmPort
  , deploymentInstanceKey
  ) where

import           Api
import           Api.Keycloak.Models
import           Api.Keycloak.Models.Introspect
import           Api.Keycloak.Utils
import           Auth.Client
import           Auth.Token
import           Config
import           Control.Monad.Logger
import           Control.Monad.Reader
import           Data.Aeson
import qualified Data.Map                              as M
import           Data.Maybe
import           Data.Text                             (Text)
import qualified Data.Text                             as T
import           Database
import           Database.Persist
import           Database.Persist.Postgresql
import           Deployment.Models.Deployment
import           Deployment.Schema
import           Models
import           Models.JSONError
import           Pool
import           Proxmox.Deploy.Models.Config.Template
import           Servant
import           Text.Read                             (read, readMaybe)

templateAdminRole = "image-admin"
templateReadRole = "image-view"
pageSize = 20

getPagedTemplates :: Maybe Int -> BearerWrapper -> AppT (PagedResponse [ConfigTemplate])
getPagedTemplates pageN (BearerWrapper token) = do
  _ <- requireManyRealmRoles token [[templateAdminRole], [templateReadRole]]
  let page = max 1 $ fromMaybe 1 pageN
  totalTemplates <- runDB $ count ([] :: [Filter MachineTemplateData])
  tmpls <- runDB $ selectList ([] :: [Filter MachineTemplateData]) [OffsetBy (pageSize * (page - 1)), LimitTo pageSize]
  pure $ PagedResponse
    { responseTotal=totalTemplates
    , responsePageSize=pageSize
    , responseObjects=map (\e -> ConfigTemplate {configTemplateName=(T.unpack . machineTemplateDataName . entityVal) e, configTemplateID=(fromIntegral . fromSqlKey . entityKey) e}) tmpls
    }

deleteTemplate :: Int -> BearerWrapper -> AppT ()
deleteTemplate templateID (BearerWrapper token) = do
  _ <- requireRealmRoles token [templateAdminRole]
  templateExists <- runDB $ exists [ MachineTemplateDataId ==. (toSqlKey . fromIntegral) templateID ]
  if not templateExists then sendJSONError err404 (JSONError "notFound" "Template not found" Null) else do
    _ <- runDB $ deleteWhere [ MachineTemplateDataId ==. (toSqlKey . fromIntegral) templateID ]
    pure ()

createTemplate :: ConfigTemplate -> BearerWrapper -> AppT ()
createTemplate (ConfigTemplate { .. }) (BearerWrapper token) = do
  _ <- requireRealmRoles token [templateAdminRole]
  paramsTaken <- runDB $ exists ([MachineTemplateDataId ==. (toSqlKey . fromIntegral) configTemplateID] ||. [MachineTemplateDataName ==. T.pack configTemplateName])
  if paramsTaken then sendJSONError err400 (JSONError "badRequest" "Template name or ID is taken" Null) else do
    _ <- runDB $ insertKey ((MachineTemplateDataKey . fromIntegral) configTemplateID) (MachineTemplateData (T.pack configTemplateName))
    pure ()

deployTemplatesAdmin = "deployment-admin"
deployTemplatesCreator = "deployment-create"

templateSearchFilter :: IntrospectResponse -> [Filter DeploymentTemplateData]
templateSearchFilter InactiveToken = error "Unreachable"
templateSearchFilter (ActiveToken { .. }) = if deployTemplatesAdmin `elem` tokenRealmRoles then [] else
  [ DeploymentTemplateDataOwnerId ==. fromMaybe "" tokenUUID ]

getPagedDeploymentTemplates :: Maybe Int -> BearerWrapper -> AppT (PagedResponse [DeploymentTemplate])
getPagedDeploymentTemplates pageN (BearerWrapper token) = do
  ~t@(ActiveToken { .. }) <- requireManyRealmRoles token [[deployTemplatesAdmin], [deployTemplatesCreator]]
  let page = max 1 $ fromMaybe 1 pageN
  let filters = templateSearchFilter t
  templatesTotal <- runDB $ count filters
  templates <- runDB $ selectList filters [OffsetBy $ (page - 1) * pageSize, LimitTo pageSize, Desc DeploymentTemplateDataId]
  pure $ PagedResponse
    { responseObjects = map (\e -> DeploymentTemplate
      { templateVMs=(deploymentTemplateDataVms . entityVal) e
      , templateTitle=(deploymentTemplateDataTitle . entityVal) e
      , templateOwner=(deploymentTemplateDataOwnerId . entityVal) e
      , templateId=(fromIntegral . fromSqlKey . entityKey) e
      , templateExistingNetworks=(deploymentTemplateDataExistingNetworks . entityVal) e
      , templateAvaiableVMs=(deploymentTemplateDataAvailableVMs . entityVal) e
      }) templates
    , responsePageSize=pageSize
    , responseTotal=templatesTotal
    }

createDeploymentTemplate :: DeploymentCreate -> BearerWrapper -> AppT ()
createDeploymentTemplate (DeploymentCreate { .. }) (BearerWrapper token) = do
  ~(ActiveToken { .. }) <- requireManyRealmRoles token [[deployTemplatesAdmin], [deployTemplatesCreator]]
  if isNothing tokenUUID then sendJSONError err401 (JSONError "invalidToken" "Token has no UUID" Null) else do
    titleTaken <- runDB $ exists [ DeploymentTemplateDataTitle ==. reqTitle ]
    if titleTaken then sendJSONError err400 (JSONError "titleTaken" "Title is not unique" Null) else do
      _ <- runDB $ insert
        (DeploymentTemplateData
        { deploymentTemplateDataVms=reqVMs
        , deploymentTemplateDataTitle=reqTitle
        , deploymentTemplateDataOwnerId=fromJust tokenUUID
        , deploymentTemplateDataExistingNetworks=reqExistingNetworks
        , deploymentTemplateDataAvailableVMs=reqAvailableVMs
        })
      pure ()

getDeploymentTemplate :: Int -> BearerWrapper -> AppT DeploymentTemplate
getDeploymentTemplate tID (BearerWrapper token) = do
  ~(ActiveToken { .. }) <- requireManyRealmRoles token [[deployTemplatesAdmin], [deployTemplatesCreator]]
  template' <- runDB $ get (DeploymentTemplateDataKey . fromIntegral $ tID)
  case template' of
    Nothing -> sendJSONError err400 (JSONError "notFound" "Template not found" Null)
    (Just (DeploymentTemplateData { .. })) -> do
      if deployTemplatesAdmin `notElem` tokenRealmRoles && tokenUUID /= Just deploymentTemplateDataOwnerId then
        sendJSONError err403 (JSONError "notOwner" "You're not owner of template!" Null)
      else do
        pure $ DeploymentTemplate
          { templateAvaiableVMs = deploymentTemplateDataAvailableVMs
          , templateExistingNetworks = deploymentTemplateDataExistingNetworks
          , templateId = tID
          , templateOwner = deploymentTemplateDataOwnerId
          , templateTitle = deploymentTemplateDataTitle
          , templateVMs = deploymentTemplateDataVms
          }

deleteDeploymentTemplate :: Int -> BearerWrapper -> AppT ()
deleteDeploymentTemplate tID (BearerWrapper token) = do
  ~(ActiveToken { .. }) <- requireManyRealmRoles token [[deployTemplatesAdmin], [deployTemplatesCreator]]
  template' <- runDB $ get (DeploymentTemplateDataKey . fromIntegral $ tID)
  case template' of
    Nothing -> sendJSONError err400 (JSONError "notFound" "Template not found" Null)
    (Just (DeploymentTemplateData { .. })) -> do
      if deployTemplatesAdmin `notElem` tokenRealmRoles && tokenUUID /= Just deploymentTemplateDataOwnerId then
        sendJSONError err403 (JSONError "notOwner" "You're not owner of template!" Null)
      else do
        runDB $ delete (DeploymentTemplateDataKey . fromIntegral $ tID)
        pure ()

patchDeploymentTemplate = undefined
requestDeploymentVMID = undefined
requestDeploymentDisplay = undefined

callGroupDeployment :: Int -> Maybe Text -> BearerWrapper -> AppT ()
callGroupDeployment tID groupName (BearerWrapper token) = do
  ~(ActiveToken { .. }) <- requireManyRealmRoles token [[deployTemplatesAdmin], [deployTemplatesCreator]]
  case groupName of
    Nothing -> sendJSONError err400 (JSONError "badRequest" "Group name is not set" Null)
    (Just group) -> do
      template' <- runDB $ get (DeploymentTemplateDataKey . fromIntegral $ tID)
      case template' of
        Nothing -> sendJSONError err400 (JSONError "notFound" "Template not found" Null)
        (Just (DeploymentTemplateData { .. })) -> do
          if deployTemplatesAdmin `notElem` tokenRealmRoles && tokenUUID /= Just deploymentTemplateDataOwnerId then
            sendJSONError err403 (JSONError "notOwner" "You're not owner of template!" Null)
          else do
            Config { .. } <- ask
            _ <- withTokenVariable'' $ \t -> do
              runClientApp authEnv (getPagedGroupMembers group (BearerWrapper t) Nothing)
            $(logInfo) $ "Sending group deployment of template " <> (T.pack . show) tID <> " for group " <> group
            putTask tasksPool (GroupDeployment tID group)
            pure ()

deploymentInstanceKey :: DeploymentInstanceData -> Text
deploymentInstanceKey e = deploymentInstanceDataOnwerId e <> "-" <>
  (T.pack . show . (fromIntegral :: (Integral a) => a -> Int) . fromSqlKey . deploymentInstanceDataParent) e

getDeploymentTemplateInstances :: Int -> Maybe Int -> BearerWrapper -> AppT (PagedResponse [DeploymentInstanceBrief])
getDeploymentTemplateInstances tID pageN (BearerWrapper token) = do
  ~(ActiveToken { .. }) <- requireManyRealmRoles token [[deployTemplatesAdmin], [deployTemplatesCreator]]
  template' <- runDB $ get (DeploymentTemplateDataKey . fromIntegral $ tID)
  case template' of
    Nothing -> sendJSONError err400 (JSONError "notFound" "Template not found" Null)
    (Just (DeploymentTemplateData { .. })) -> do
      if deployTemplatesAdmin `notElem` tokenRealmRoles && tokenUUID /= Just deploymentTemplateDataOwnerId then
        sendJSONError err403 (JSONError "notOwner" "You're not owner of template!" Null)
      else do
        let page = max 1 $ fromMaybe 1 pageN
        instancesCount <- runDB $ count [ DeploymentInstanceDataParent ==. (DeploymentTemplateDataKey . fromIntegral $ tID)]
        instances <- runDB $ selectList [ DeploymentInstanceDataParent ==. (DeploymentTemplateDataKey . fromIntegral $ tID)] [LimitTo pageSize, OffsetBy $ pageSize * (page - 1)]
        pure $ PagedResponse
          { responseObjects=map
            (\e -> DeploymentInstanceBrief
              { briefDeploymentUser=(deploymentInstanceDataOnwerId . entityVal) e
              , briefDeploymentTitle=deploymentTemplateDataTitle
              , briefDeploymentStatus=(deploymentInstanceDataState . entityVal) e
              , briefDeploymentId=deploymentInstanceKey (entityVal e)
              }) instances
          , responsePageSize=pageSize
          , responseTotal=instancesCount
          }

getMyTemplateInstances :: Maybe Int -> BearerWrapper -> AppT (PagedResponse [DeploymentInstanceBrief])
getMyTemplateInstances pageN (BearerWrapper token) = let

  helper :: [DeploymentInstanceBrief] -> [Entity DeploymentInstanceData] -> AppT [DeploymentInstanceBrief]
  helper acc [] = (pure . reverse) acc
  helper acc ((Entity _ e):l) = do
    ~(Just (DeploymentTemplateData { .. })) <- runDB $ get (deploymentInstanceDataParent e)
    let brief = DeploymentInstanceBrief {
        briefDeploymentUser=deploymentInstanceDataOnwerId e
      , briefDeploymentTitle=deploymentTemplateDataTitle
      , briefDeploymentStatus=deploymentInstanceDataState e
      , briefDeploymentId=deploymentInstanceKey e
      }
    helper (brief:acc) l

  in do
  ~(ActiveToken { .. }) <- requireToken token
  case tokenUUID of
    Nothing -> $(logWarn) "Empty token UUID" >> pure (PagedResponse {responseObjects=[], responsePageSize=0, responseTotal=0})
    (Just userId) -> do
      let page = max 1 $ fromMaybe 1 pageN
      instancesCount <- runDB $ count [ DeploymentInstanceDataOnwerId ==. userId ]
      instances <- runDB $ selectList [ DeploymentInstanceDataOnwerId ==. userId ] [LimitTo pageSize, OffsetBy $ pageSize * (page - 1)]
      r <- helper [] instances
      pure $ PagedResponse
        { responseObjects=r
        , responsePageSize=pageSize
        , responseTotal=instancesCount
        }

getDeploymentInstance :: Text -> BearerWrapper -> AppT DeploymentInstance
getDeploymentInstance instanceId (BearerWrapper token) = do
  ~(ActiveToken { .. }) <- requireToken token
  let isAdmin = deployTemplatesAdmin `elem` tokenRealmRoles
  instance' <- runDB $ get (DeploymentInstanceDataKey instanceId)
  case instance' of
    Nothing -> sendJSONError err404 (JSONError "deploymentNotFound" "Deployment not found" Null)
    (Just (DeploymentInstanceData { .. })) -> do
      ~(Just (DeploymentTemplateData { .. })) <- runDB $ get deploymentInstanceDataParent
      if Just deploymentTemplateDataOwnerId /= tokenUUID && Just deploymentInstanceDataOnwerId /= tokenUUID && not isAdmin then sendJSONError err403 (JSONError "notOwner" "You do not own this instance!" Null) else do
        pure $ DeploymentInstance
          { instanceVMLinks=M.mapKeys (T.pack) $ M.map (T.pack) deploymentInstanceDataVmLinks
          , instanceUser=deploymentInstanceDataOnwerId
          , instanceTitle=deploymentTemplateDataTitle
          , instanceState=deploymentInstanceDataState
          , instanceOf=(fromIntegral . fromSqlKey) deploymentInstanceDataParent
          , instanceLogs=if not isAdmin then [] else deploymentInstanceDataLogs
          , instanceDeployConfig=if not isAdmin then Nothing else deploymentInstanceDataDeployConfig
          }

getVMPortPower = undefined
switchVMPortPower = undefined
getVMPortNetworks = undefined

splitVmPort :: Text -> Maybe (Text, Int)
splitVmPort portV = do
  case T.splitOn "-" portV of
    [] -> Nothing
    [_] -> Nothing
    lst -> readMaybe (T.unpack . last $ lst) >>= \x -> Just (T.intercalate "-" (init lst), x)

vmPortAccessCheck :: Text -> BearerWrapper -> AppT ()
vmPortAccessCheck vmPort (BearerWrapper token) = do
  r <- lookupToken token
  case r of
    InactiveToken -> sendJSONError err401 (JSONError "" "" Null)
    (ActiveToken { .. }) -> do
      case splitVmPort vmPort of
        Nothing -> sendJSONError err403 (JSONError "" "" Null)
        (Just (nodeName, vmid)) -> do
          $(logDebug) $ "Checking access from " <> tokenUsername <> " to " <> nodeName <> ", " <> (T.pack . show) vmid
          pure ()

deploymentServer :: ServerT DeploymentAPI AppT
deploymentServer = getPagedTemplates
  :<|> deleteTemplate
  :<|> createTemplate
  :<|> getPagedDeploymentTemplates
  :<|> createDeploymentTemplate
  :<|> getDeploymentTemplate
  :<|> deleteDeploymentTemplate
  :<|> patchDeploymentTemplate
  :<|> callGroupDeployment
  :<|> requestDeploymentVMID
  :<|> requestDeploymentDisplay
  :<|> getDeploymentTemplateInstances
  :<|> getMyTemplateInstances
  :<|> getDeploymentInstance
  :<|> getVMPortPower
  :<|> switchVMPortPower
  :<|> getVMPortNetworks
  :<|> vmPortAccessCheck
