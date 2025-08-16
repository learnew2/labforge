{- Copyright (C) 2025 Ilya Zamaratskikh

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, see <http://www.gnu.org/licenses>. -}
{-# LANGUAGE DataKinds         #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RecordWildCards   #-}
{-# LANGUAGE TemplateHaskell   #-}
{-# LANGUAGE TypeOperators     #-}
module Api.Cluster
  ( clusterServer
  ) where

import           Api
import           Api.BaseUrl
import           Api.Keycloak.Models
import           Api.Keycloak.Models.Introspect      (IntrospectResponse (..))
import           Auth.Token
import           Cluster.Models.Node
import           Cluster.Schema
import           Config
import           Control.Monad.Catch
import           Control.Monad.IO.Class
import           Control.Monad.Logger
import           Data.Aeson
import           Data.List                           (intercalate)
import           Data.Maybe
import           Data.Text                           (Text)
import qualified Data.Text                           as T
import           Database
import           Database.Persist
import           Models.JSONError
import           Proxmox.Client
import           Proxmox.Deploy.Models.Config
import           Proxmox.Deploy.Models.Config.Deploy
import           Proxmox.Deploy.Ssl
import           Proxmox.Schema
import           Servant

returnFirstAvailable :: [ClusterNode] -> AppT (Maybe ClusterNode)
returnFirstAvailable [] = pure Nothing
returnFirstAvailable (n@(ClusterNode { .. }):nodes) = do
  proxmoxUrl <- (liftIO . tryParseUrl) (T.unpack nodeApiUrl)
  case proxmoxUrl of
    (Left _) -> returnFirstAvailable nodes
    (Right url) -> do
      mgr <- (liftIO . createProxmoxManager) (DeployConfig {deployVMs=[], deployTemplates=[], deployParameters=DeployParams {deployUrl=nodeApiUrl, deployToken=Just nodeApiToken, deployStartVMID=0, deployIgnoreSSL=nodeIgnoreSSL, deployNodeName=nodeName}, deployNetworks=[], deployAgent=Nothing})
      let state = ProxmoxState url mgr
      versionReply <- (liftIO . runProxmoxClient' state) getVersion
      case versionReply of
        (Left e) -> do
          $(logError) $ "Error response from " <> nodeName <> ":" <> (T.pack . show) e
          returnFirstAvailable nodes
        (Right _) -> (pure . Just) n

accessCheck :: BearerWrapper -> AppT IntrospectResponse
accessCheck (BearerWrapper token) = requireRealmRoles token ["cluster-admin"]

getPagedNodes :: BearerWrapper -> Maybe Int -> AppT (PagedResponse [ClusterNode])
getPagedNodes token pageN = do
  _ <- accessCheck token
  let page = max 1 (fromMaybe 1 pageN)
  let pageSize = 15
  let filters = [OffsetBy ((page - 1) * pageSize), LimitTo pageSize]
  totalNodes <- runDB $ count ([] :: [Filter DeployNode])
  clusters <- runDB $ selectList ([] :: [Filter DeployNode]) filters
  return $ PagedResponse
    { responseTotal=totalNodes
    , responsePageSize=pageSize
    , responseObjects=map (\(Entity _ d) -> deployNodeData d) clusters
    }

getNodeByName :: Text -> BearerWrapper -> AppT ClusterNode
getNodeByName nodeName token = do
  _ <- accessCheck token
  node' <- runDB $ selectFirst [ DeployNodeName ==. nodeName ] []
  case node' of
    Nothing -> sendJSONError err404 (JSONError "notFound" "Node not found" Null)
    (Just (Entity _ node)) -> do
      return $ deployNodeData node

deleteNode :: Text -> BearerWrapper -> AppT ()
deleteNode nodeName token = do
  _ <- accessCheck token
  nodeExists <- runDB $ exists [ DeployNodeName ==. nodeName ]
  if nodeExists then sendJSONError err404 (JSONError "notFound" "Node not found" Null) else do
    runDB $ deleteWhere [ DeployNodeName ==. nodeName ]
    pure ()

-- TODO: validation
createNode :: ClusterNode -> BearerWrapper -> AppT ()
createNode nodeData token = do
  _ <- accessCheck token
  let name = nodeName nodeData
  nameTaken <- runDB $ exists [ DeployNodeName ==. name ]
  if nameTaken then sendJSONError err400 (JSONError "nameTaken" "Node name is taken" Null) else do
    parseUrlRes <- mapM (liftIO . tryParseUrl . T.unpack) [nodeAgentUrl nodeData, nodeApiUrl nodeData]
    case sequence parseUrlRes of
      (Left _) -> sendJSONError err400 (JSONError "badUrl" "Node url is invalid" Null)
      (Right _) -> do
        _ <- runDB $ insert (DeployNode name nodeData)
        pure ()

getDeployNode :: BearerWrapper -> AppT ClusterNode
getDeployNode token = do
  _ <- accessCheck token
  allNodes <- runDB $ selectList ([] :: [Filter DeployNode]) []
  r <- returnFirstAvailable (map (\(Entity _ d) -> deployNodeData d) allNodes)
  case r of
    Nothing -> sendJSONError err500 (JSONError "noAvailableNodes" "No nodes available!" Null)
    (Just n) -> pure n

getWebsockifyConfig :: AppT Text
getWebsockifyConfig = let
  helper :: Text -> [ClusterNode] -> Text
  helper acc (ClusterNode { .. }:nodes) = do
    let ports = filter (`notElem` nodeExcludedPorts) [nodeMinDisplay..nodeMaxDisplay]
    let lines = map (\display -> nodeName <> "-" <> (T.pack . show) display <> ": " <> nodeDisplayIP <> ":" <> (T.pack . show) display) ports
    helper (acc <> T.intercalate "\n" lines <> "\n") nodes
  helper acc [] = acc
  in do
  allNodes <- runDB $ selectList ([] :: [Filter DeployNode]) []
  pure $ helper "" (map (\(Entity _ d) -> deployNodeData d) allNodes)

clusterServer :: ServerT ClusterManagerAPI AppT
clusterServer = getPagedNodes
  :<|> getNodeByName
  :<|> createNode
  :<|> deleteNode
  :<|> getDeployNode
  :<|> getWebsockifyConfig
