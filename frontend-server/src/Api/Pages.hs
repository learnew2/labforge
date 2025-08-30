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
{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE OverloadedStrings   #-}
{-# LANGUAGE QuasiQuotes         #-}
{-# LANGUAGE RecordWildCards     #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE TypeOperators       #-}
module Api.Pages
  ( pagesServer
  , PagesAPI
  ) where

import           Api
import           Api.Keycloak.Models
import           Api.Keycloak.Models.Introspect
import           Api.Keycloak.Models.User
import           Api.Keycloak.Utils
import           Api.Redirect
import           Api.Retry
import           Api.Utils
import qualified Auth.Client                              as Auth
import           Config
import           Control.Monad.Logger
import           Control.Monad.Reader
import           Data.Aeson
import           Data.Aeson.Encode.Pretty
import qualified Data.Aeson.KeyMap                        as KM
import qualified Data.ByteString.Char8                    as BS
import qualified Data.ByteString.Lazy.Char8               as LBS
import           Data.Either
import           Data.Functor                             ((<&>))
import           Data.List                                (intercalate)
import qualified Data.Map                                 as M
import           Data.Maybe
import           Data.Text                                (Text)
import qualified Data.Text                                as T
import           Database.Persist
import qualified Deployment.Client                        as C
import           Deployment.Models.Deployment
import           Kroki.Client
import           Models.JSONError
import           Network.HTTP.Types                       (urlEncode)
import           Proxmox.Deploy.Models.Config
import           Proxmox.Deploy.Models.Config.Deploy
import           Proxmox.Deploy.Models.Config.DeployAgent
import           Proxmox.Deploy.Models.Config.Template
import           Proxmox.Deploy.Models.Config.VM
import           Proxmox.Models.NetworkInterface
import           Roles
import           Servant
import           Servant.Client
import           Servant.HTML.Blaze
import           Service.Environment
import           Templates.Base
import           Text.Blaze.Html
import           Text.Hamlet
import           Text.Printf
import           Utils

type AuthHeader' = Header "Authorization" BearerWrapper

type PagesAPI = AuthHeader' :> QueryParam "page" Int :> Get '[HTML] Html
  :<|> "notfound" :> Get '[HTML] Html
  :<|> "internalerror" :> Get '[HTML] Html
  :<|> "norights" :> Get '[HTML] Html
  :<|> "instance" :> Capture "instanceID" Text :> AuthHeader' :> QueryParam "power" Text :> Get '[HTML] Html
  :<|> "instance" :> Capture "instanceID" Text :> "schema" :> AuthHeader' :> Get '[HTML] Html
  :<|> "vnc" :> Capture "vmPort" Text :> AuthHeader' :> Get '[HTML] Html
  :<|> "deployment" :> "create" :> AuthHeader' :> Get '[HTML] Html
  :<|> "deployment" :> "my" :> QueryParam "page" Int :> QueryParam "success" Int :> AuthHeader' :> Get '[HTML] Html
  :<|> "deployment" :> Capture "deploymentId" Int :> "delete" :> AuthHeader' :> Get '[HTML] Html
  :<|> "deployment" :> Capture "deploymentId" Int :> "edit" :> AuthHeader' :> Get '[HTML] Html
  :<|> "image" :> Capture "imageId" Int :> "delete" :> AuthHeader' :> Get '[HTML] Html
  :<|> "image" :> "my" :> QueryParam "page" Int :> QueryParam "failedCreate" Text :> AuthHeader' :> Get '[HTML] Html
  :<|> "image" :> "create" :> QueryParam "name" Text :> QueryParam "id" Int :> AuthHeader' :> Get '[HTML] Html
  :<|> "deployment" :> Capture "deploymentId" Int :> "deploy" :> QueryParam "action" Text :> QueryParam "group" Text :> AuthHeader' :> Get '[HTML] Html
  :<|> "deployment" :> Capture "deploymentId" Int :> "instances" :> QueryParam "page" Int :> AuthHeader' :> Get '[HTML] Html

globalDecoder' :: AppT (Either ClientError a) -> AppT a
globalDecoder' v = do
  r <- v
  globalDecoder (tryDecodeError r)

globalDecoder :: DecodeResult a -> AppT a
globalDecoder (DecodedResult a) = pure a
globalDecoder (DecodedError code e@(JSONError { .. })) = do
  $(logError) $ "Got decoded error: " <> (T.pack . show) e
  sendJSONError (ServerError {errReasonPhrase="", errHeaders=[], errHTTPCode=code, errBody=""}) e
globalDecoder (UndecodedError code b) = throwError $ ServerError {errReasonPhrase="", errHeaders=[], errHTTPCode=code, errBody=LBS.fromStrict b}
globalDecoder (OtherError e) = do
  $(logError) $ "Got other error: " <> (T.pack .  show) e
  sendJSONError err500 (JSONError "" "" Null)

pagesServer :: ServerT PagesAPI AppT
pagesServer = indexPage
  :<|> notFound
  :<|> internalError
  :<|> noRights
  :<|> instancePage
  :<|> instanceSchemaPage
  :<|> vncPage
  :<|> deploymentCreatePage
  :<|> deploymentListPage
  :<|> deleteDeploymentPage
  :<|> deploymentEditPage
  :<|> deleteImagePage
  :<|> imagesPage
  :<|> createImagePage
  :<|> deploymentDeployPage
  :<|> deploymentInstancesPage

deploymentInstancesPage :: Int -> Maybe Int -> Maybe BearerWrapper -> AppT Html
deploymentInstancesPage did pageN t = do
  token <- requireToken' t
  let ~(Just userToken) = t
  env <- asks $ getEnvFor DeploymentService
  let page = unpackPage pageN
  r@(PagedResponse { responseObjects=instances, responseTotal=total }) <- globalDecoder' $ defaultRetryClientC env (C.getDeploymentTemplateInstances did (Just page) userToken)
  authEnv <- asks $ getEnvFor AuthService
  userData' <- withTokenVariable' $ \t -> do
    defaultRetryClientC authEnv $ mapM (flip Auth.getUserBriefInfo (BearerWrapper t) . briefDeploymentUser) instances
  let userData = either (const M.empty) (M.fromList . map (\e -> (userID e, e))) userData'
  let hasNext = hasNextPages page r
  let totallyEmpty = page == 1 && total == 0
  (\v -> baseTemplate token Nothing (Just "Образы") v Nothing) [shamlet|
<div .container>
  $if totallyEmpty
    <h1 .title.is-3> Нет развернутых стендов!
  $else
    <h1 .title.is-3> #{briefDeploymentTitle (head instances)}: стенды
    <div .columns.is-multiline>
    $forall (DeploymentInstanceBrief { .. }) <- instances
      <div .column>
        <div .card>
          <header .card-header>
            <p .card-header-title>
              $case M.lookup briefDeploymentUser userData
                $of (Just (BriefUser { .. }))
                  #{ fromMaybe "-" userFirstName } #{ fromMaybe "-" userLastName }
                $of Nothing
                  Пользователь #{briefDeploymentUser}
          <footer .card-footer>
            <a .card-footer-item href=/instance/#{briefDeploymentId}> Открыть
    <nav .pagination.is-centered>
      <ul .pagination-list>
        $if page /= 1
          <li>
            <a .pagination-link href=/deployment/#{did}/instance?page=#{preEscapedToHtml $ page - 1}> #{page - 1}
        <li>
          <a .pagination-link.is-current> #{page}
        $if hasNext
          <li>
            <a .pagination-link href=/deployment/#{did}/instance?page=#{preEscapedToHtml $ page + 1}> #{page + 1}
|]


deploymentDeployPage :: Int -> Maybe Text -> Maybe Text -> Maybe BearerWrapper -> AppT Html
deploymentDeployPage did (Just "deploy") (Just group) t = do
  _ <- requireToken' t
  let ~(Just userToken) = t
  env <- asks $ getEnvFor DeploymentService
  r <- defaultRetryClientC env (C.callGroupDeployment did (Just group) userToken) <&> tryDecodeError
  case r of
    (DecodedResult _)    -> tempRedirectTo "/deployment/my?success=1"
    (OtherError _)       -> sendJSONError err500 (JSONError "" "" Null)
    (DecodedError 400 _) -> tempRedirectTo "/deployment/my?success=0"
    (UndecodedError status _) -> throwError (ServerError {errBody="", errHTTPCode=status, errHeaders=[], errReasonPhrase=""})
    (DecodedError status _) -> throwError (ServerError {errBody="", errHTTPCode=status, errHeaders=[], errReasonPhrase=""})
deploymentDeployPage did (Just "destroy") (Just group) t = do
  _ <- requireToken' t
  let ~(Just userToken) = t
  env <- asks $ getEnvFor DeploymentService
  r <- defaultRetryClientC env (C.callGroupDestroy did (Just group) userToken) <&> tryDecodeError
  case r of
    (DecodedResult _)    -> tempRedirectTo "/deployment/my?success=2"
    (OtherError _)       -> sendJSONError err500 (JSONError "" "" Null)
    (DecodedError 400 _) -> tempRedirectTo "/deployment/my?success=0"
    (UndecodedError status _) -> throwError (ServerError {errBody="", errHTTPCode=status, errHeaders=[], errReasonPhrase=""})
    (DecodedError status _) -> throwError (ServerError {errBody="", errHTTPCode=status, errHeaders=[], errReasonPhrase=""})
deploymentDeployPage _ _ _ _ = tempRedirectTo "/deployment/my"

imagesPage :: Maybe Int -> Maybe Text -> Maybe BearerWrapper -> AppT Html
imagesPage pageN failedFlag t = do
  token <- canViewImages t
  let canManage = canCreateImages token
  let ~(Just userToken) = t
  env <- asks $ getEnvFor DeploymentService
  let page = unpackPage pageN
  i@(PagedResponse { responseTotal=imagesTotal, responseObjects=images }) <- globalDecoder' $ defaultRetryClientC env (C.getPagedTemplates (Just page) userToken)
  let hasNext = hasNextPages page i
  let totallyEmpty = page == 1 && imagesTotal == 0
  (\v -> baseTemplate token Nothing (Just "Образы") v Nothing) [shamlet|
<div .container>
  $if canManage
    $if isJust failedFlag
      <article .message.is-danger>
        <div .message-body>
          Не удалось создать шаблон. Проверьте заполненность полей и уникальность значений
    <form .box.block action=/image/create method=GET>
      <div .field>
        <label .label> Название шаблона
        <div .control>
          <input .input type=text name="name">
      <div .field>
        <label .label> VMID шаблона (должен быть уникальным)
        <div .control>
          <input .input type=text name="id">
      <button .button.is-success.is-fullwidth> Создать
  $if totallyEmpty
    <h1 .title.is-3> Нет доступных образов!
  $else
    <h1 .title.is-3> Доступные образы
    <table .table.is-fullwidth>
      <thead>
        <tr>
          <th> Название образа
          <th> VMID
          <th>
      <tbody>
        $forall (ConfigTemplate { .. }) <- images
          <tr>
            <td> #{configTemplateName}
            <td> #{configTemplateID}
            <td>
              <a href=/image/#{configTemplateID}/delete> Удалить
    <nav .pagination.is-centered>
      <ul .pagination-list>
        $if page /= 1
          <li>
            <a .pagination-link href=/image/my?page=#{preEscapedToHtml $ page - 1}> #{page - 1}
        <li>
          <a .pagination-link.is-current> #{page}
        $if hasNext
          <li>
            <a .pagination-link href=/image/my?page=#{preEscapedToHtml $ page + 1}> #{page + 1}
|]

createImagePage :: Maybe Text -> Maybe Int -> Maybe BearerWrapper -> AppT Html
createImagePage (Just name) (Just id') t = do
  token <- requireToken' t
  let canManage = canCreateImages token
  if not canManage then sendJSONError err403 (JSONError "" "" Null) else do
    let ~(Just userToken) = t
    env <- asks $ getEnvFor DeploymentService
    createRes <- (defaultRetryClientC env (C.createTemplate (ConfigTemplate {configTemplateID=id', configTemplateName=T.unpack name}) userToken)) <&> tryDecodeError
    case createRes of
      (DecodedResult _)    -> tempRedirectTo "/image/my"
      (OtherError _)       -> sendJSONError err500 (JSONError "" "" Null)
      (DecodedError 400 _) -> tempRedirectTo "/image/my?failedCreate=1"
      (UndecodedError status _) -> throwError (ServerError {errBody="", errHTTPCode=status, errHeaders=[], errReasonPhrase=""})
      (DecodedError status _) -> throwError (ServerError {errBody="", errHTTPCode=status, errHeaders=[], errReasonPhrase=""})
createImagePage _ _ _ = tempRedirectTo "/image/my"

deleteImagePage :: Int -> Maybe BearerWrapper -> AppT Html
deleteImagePage id' t = do
  token <- requireToken' t
  let canManage = canCreateImages token
  let ~(Just userToken) = t
  if not canManage then sendJSONError err403 (JSONError "" "" Null) else do
    env <- asks $ getEnvFor DeploymentService
    _ <- globalDecoder' $ defaultRetryClientC env (C.deleteTemplate id' userToken)
    tempRedirectTo "/image/my"

deleteDeploymentPage :: Int -> Maybe BearerWrapper -> AppT Html
deleteDeploymentPage did t = do
  _ <- canCreateDeployments t
  let ~(Just userToken) = t
  env <- asks $ getEnvFor DeploymentService
  _ <- globalDecoder' (defaultRetryClientC env $ C.deleteDeploymentTemplate did userToken)
  tempRedirectTo "/deployment/my"

genericDeploymentForm = let
  indexKey :: [(String, String)]
  indexKey = [(":key", "index")]

  netIndexKey :: [(String, String)]
  netIndexKey = [(":key", "netIndex")]

  netSelectBind :: [(String, String)]
  netSelectBind = [(":selected", "vms[index]['networks'][netIndex]['type'] == avtype")]

  netNumberBind :: [(String, String)]
  netNumberBind = [(":selected", "vms[index]['networks'][netIndex]['number'] == i - 1")]
  in [shamlet|
<div .container x-data>
  <form .form.is-fullwidth x-data="formData" @submit.prevent="">
    <p x-text="JSON.stringify(vms)">
    <div .control>
      <label .label> Имя стенда
      <input .input type=text x-model="title">
    <template x-for="(obj, index) in vms" *{indexKey}>
      <template x-if="vms[index]">
        <div .box>
          <p x-text="JSON.stringify(obj)">
          <label .label> Название VM
          <div .control>
            <input .input type="text" x-model="vms[index]['name']">
          <label .label> Клонировать из
          <div .control>
            <div .select>
              <select x-model="vms[index]['clone_from']">
                <option value="" disabled> Выберите шаблон
                <template x-for="template in templates">
                  <option x-text="template">
          <label .label> Время ожидания после включения (в секундах)
          <div .control>
            <input .input type=number x-model.number="vms[index]['delay']">
          <label .label> Кол-во ядер
          <div .control>
            <input .input type=number x-model.number="vms[index]['cores']">
          <label .label> Кол-во ОЗУ (в МБ)
          <div .control>
            <input .input type=number x-model.number="vms[index]['memory']">
          <label .label> Лимит нагрузки CPU (в целых ядрах)
          <div .control>
            <input .input type=number x-model.number="vms[index]['cpulimit']">
          <div .control>
            <label .checkbox>
              <input .checkbox type=checkbox x-model="vms[index]['available']">
              Доступна пользователю
          <div .control>
            <label .checkbox>
              <input .checkbox type=checkbox x-model="vms[index]['running']">
              Включить VM при развертывании
          <div .is-flex.is-flex-direction-row.is-align-items-center.is-fullwidth x-data="netForm">
            <input .input type="text" x-model="netname">
            <div .select>
              <select x-model="nettype">
                <template x-for="avtype in interfaces">
                  <option x-text="avtype">
            <button .button @click="addNetwork(vms[index])"> Подключить
          <template x-for="(netObj, netIndex) in vms[index]['networks']" x-data="netForm">
            <div .is-flex.is-flex-direction-row.is-align-items-center.is-fullwidth>
              <input .input type="text" x-model="vms[index]['networks'][netIndex]['name']">
              <div .select>
                <select x-model.number="vms[index]['networks'][netIndex]['number']">
                  <option value=""> -
                  <template x-for="i in 33">
                    <option x-text="i - 1" *{netNumberBind}>
              <div .select>
                <select x-model="vms[index]['networks'][netIndex]['type']">
                  <template x-for="avtype in interfaces">
                    <option x-text="avtype" *{netSelectBind}>
              <button .button @click="removeNetwork(vms[index], netObj)"> Удалить
          <button .button.is-danger @click="deleteVM(index)"> Удалить VM
    <div .block>
      <button .button.is-fullwidth @click="addVM()"> Добавить ВМ
    <div .block x-data="{input: ''}">
      <h2 .subtitle.is-5> Список существующих сетей
      <p> Такие сети не создаются, а используют bridge с тем же именем.
      <div .control>
        <label .label> Имя сети
        <input .input type="text" x-model="input">
      <button .button.is-fullwidth @click="if (input.length > 0 && !existingNetworks.includes(input)) { existingNetworks.push(input); input = '' }"}> Добавить
      <template x-for="(net, netIndex) in existingNetworks" *{netIndexKey}>
        <div .is-flex.is-flex-direction-row.is-align-items-center.is-fullwidth>
          <p .pr-5 x-text="net">
          <button .button.is-danger @click="removeENet(netIndex)"> Удалить
    <button .button.is-success.is-fullwidth @click="sendRequest"> Создать стенд
|]

deploymentEditPage :: Int -> Maybe BearerWrapper -> AppT Html
deploymentEditPage tid t = do
  token <- canCreateDeployments t
  let ~(Just userToken) = t
  env <- asks $ getEnvFor DeploymentService
  -- TODO: get all
  (PagedResponse { responseObjects = templates }) <- globalDecoder' $ defaultRetryClientC env (C.getPagedTemplates Nothing userToken)
  template <- globalDecoder' $ defaultRetryClientC env (C.getDeploymentTemplate tid userToken)
  let names = (LBS.unpack . encode) $ map configTemplateName templates
  let availableInterfaces = (LBS.unpack . encode) [E1000, E1000E, VIRTIO, VMXNET3]

  let vmsEncoded = (LBS.unpack . encode) $ map (\(v, (Object objMap)) -> Object (KM.insert "available" (Bool $ (T.pack . configVMName) v `elem` templateAvaiableVMs template) objMap)) $ map (\x -> (x, toJSON x)) (templateVMs template)
  baseTemplate token Nothing (Just "Редактирование развертывания") genericDeploymentForm (Just $ h names availableInterfaces template vmsEncoded) where
    h names availableInterfaces template@(DeploymentTemplate { .. }) vms = [shamlet|
<script>
  document.addEventListener('alpine:init', () => {
    Alpine.data("formData", () => ({
      templates: #{preEscapedToMarkup names},
      title: "#{preEscapedToMarkup templateTitle}",
      vms: #{preEscapedToMarkup vms},
      addVM() { this.vms.push({clone_from: this.templates[0], available: true, networks: [], delay: 0, clean_networks: true, running: true, cores: 1, memory: 1024, cpulimit: 1, name: ""}) },
      deleteVM(i) { this.vms.splice(i, 1) },
      existingNetworks: #{preEscapedToMarkup $ (LBS.unpack . encode) templateExistingNetworks},
      removeENet(i) { this.existingNetworks.splice(i, 1) },
      sendRequest() {
        var availableVMs = this.vms.filter(i => i.available).map(i => i.name);
        var payload = JSON.stringify({title: this.title, availableVMs: availableVMs, existingNetworks: this.existingNetworks, vms: this.vms});
        fetch("/api/deployment/deployments/#{templateId}", {
          method: "PATCH",
          body: payload,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(r => {
          if (r.ok) {
            window.location.href = "/deployment/my"
          } else {
            return r.json().then(resp => {throw new Error(resp.error)})
          }
        }).catch(err => {
          alert("Ошибка при создании развертывания: " + err)
          console.log(err);
        })
      }
    }))

    Alpine.data("netForm", () => ({
      interfaces: #{preEscapedToMarkup availableInterfaces},
      netname: "",
      nettype: #{preEscapedToMarkup availableInterfaces}[0],
      addNetwork(vm) { if (this.netname.length > 0) { vm.networks.push({name: this.netname, type: this.nettype, number: null}); this.netname = ''; this.nettype = this.interfaces[0]; } },
      removeNetwork(vm, index) { vm.networks.splice(index, 1) }
    }))
  })
|]

deploymentCreatePage :: Maybe BearerWrapper -> AppT Html
deploymentCreatePage t = do
  token <- canCreateDeployments t
  let ~(Just userToken) = t
  env <- asks $ getEnvFor DeploymentService
  (PagedResponse { responseObjects = templates }) <- globalDecoder' $ defaultRetryClientC env (C.getPagedTemplates Nothing userToken)
  let names = (LBS.unpack . encode) $ map configTemplateName templates
  let availableInterfaces = (LBS.unpack . encode) [E1000, E1000E, VIRTIO, VMXNET3]
  baseTemplate token Nothing (Just "Создание развертывания") genericDeploymentForm (Just $ h names availableInterfaces) where
    h names availableInterfaces = [shamlet|
<script>
  document.addEventListener('alpine:init', () => {
    Alpine.data("formData", () => ({
      templates: #{preEscapedToMarkup names},
      title: "",
      vms: [],
      addVM() { this.vms.push({clone_from: this.templates[0], available: true, networks: [], delay: 0, clean_networks: true, running: true, cores: 1, memory: 1024, cpulimit: 1, name: ""}) },
      deleteVM(i) { this.vms.splice(i, 1) },
      existingNetworks: [],
      removeENet(i) { this.existingNetworks.splice(i, 1) },
      sendRequest() {
        var availableVMs = this.vms.filter(i => i.available).map(i => i.name);
        var payload = JSON.stringify({title: this.title, availableVMs: availableVMs, existingNetworks: this.existingNetworks, vms: this.vms});
        fetch("/api/deployment/deployments", {
          method: "POST",
          body: payload,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(r => {
          if (r.ok) {
            location.reload();
          } else {
            return r.json().then(resp => {throw new Error(resp.error)})
          }
        }).catch(err => {
          alert("Ошибка при создании развертывания: " + err)
          console.log(err);
        })
      }
    }))

    Alpine.data("netForm", () => ({
      interfaces: #{preEscapedToMarkup availableInterfaces},
      netname: "",
      nettype: #{preEscapedToMarkup availableInterfaces}[0],
      addNetwork(vm) { if (this.netname.length > 0) { vm.networks.push({name: this.netname, type: this.nettype, number: null}); this.netname = ''; this.nettype = this.interfaces[0]; } },
      removeNetwork(vm, index) { vm.networks.splice(index, 1) }
    }))
  })
|]

noRights :: AppT Html
noRights = do
  pure $ headlessTemplate (Just "Ошибка!") body where
    body = [shamlet|
<section class="hero is-danger is-fullheight">
  <div class="hero-body">
    <div>
      <p class="title"> Ошибка доступа!
      <p class="subtitle"> У вас нет прав на выполнение данного действия.
|]

internalError :: AppT Html
internalError = do
  pure $ headlessTemplate (Just "Ошибка!") body where
    body = [shamlet|
<section class="hero is-danger is-fullheight">
  <div class="hero-body">
    <div>
      <p class="title"> Внутренняя ошибка!
      <p class="subtitle"> Обратитесь к системному администратору и попробуйте обновить страницу
|]

notFound :: AppT Html
notFound = do
  pure $ headlessTemplate (Just "Страница не найдена!") body where
    body = [shamlet|
<section class="hero is-danger is-fullheight">
  <div class="hero-body">
    <div>
      <p class="title"> Страница не найдена!
      <p class="subtitle"> Страница с данным адресом недоступна.
|]

vncPage :: Text -> Maybe BearerWrapper -> AppT Html
vncPage vmPort t = let
  body = [shamlet|
<div .block>
  <div .container>
    <div #app>
<div .block x-data="{ networks: null }" x-init="fetch('/api/deployment/vm/#{vmPort}/networks').then(r => r.json()).then(d => networks = d)">
  <template x-if="networks">
    <div .columns.is-centered>
      <div .column.is-half>
        <table .table.is-fullwidth>
          <thead>
            <tr>
              <th> MAC-адрес
              <th> Название сети
          <tbody>
            <template x-for="mac in Object.keys(networks)">
              <tr>
                <td x-text="mac">
                <td x-text="networks[mac]">
|]
  bodyOff = [shamlet|
<div .block>
  <div .container>
    <article class="message is-warning">
      <div class="message-header">
        <p>Виртуальная машина выключена!</p>
      <div class="message-body">
        Включите виртуальную машину на странице стенда чтобы подключиться к ней
|]
  after = [shamlet|
<script src=/static/js/vnc.js>
|]

  head = [shamlet|
<link rel=stylesheet href=/static/css/vnc.css>
|]
  in do
  token <- requireToken' t
  let ~(Just userToken) = t
  deploymentEnv <- asks $ getEnvFor DeploymentService
  (PowerState vmOn) <- globalDecoder' $ defaultRetryClientC deploymentEnv (C.getVMPortPower vmPort userToken)
  if vmOn then do
    baseTemplate token (Just head) (Just "VNC") body (Just after)
  else do
    baseTemplate token (Just head) (Just "VNC") bodyOff Nothing

deploymentListPage :: Maybe Int -> Maybe Int -> Maybe BearerWrapper -> AppT Html
deploymentListPage pageN successFlag t = do
  token <- canCreateDeployments t
  let ~(Just userToken) = t
  let page = unpackPage pageN
  env <- asks $ getEnvFor DeploymentService
  d@(PagedResponse {responseTotal=totalDeployments, responseObjects=deployments}) <- globalDecoder' $ defaultRetryClientC env (C.getPagedDeploymentTemplates (Just page) userToken)
  let hasNext = hasNextPages page d
  let totallyEmpty = page == 1 && totalDeployments == 0
  (\v -> baseTemplate token Nothing (Just "Развертывания") v Nothing) [shamlet|
<div .container>
  $case successFlag
    $of (Just 0)
      <div .message.is-danger>
        <div .message-body>
          Не удалось начать развертывание! Проверьте корректность названия группы и попробуйте повторить попытку позже.
    $of (Just 1)
      <div .message.is-success>
        <div .message-body>
          Развертывание создано! В течение скорого времени на указанную группу будут созданы стенды. Вы можете наблюдать за ними во вкладке "Стенды" выбранного шаблона.
    $of (Just 2)
      <div .message.is-info>
        <div .message-body>
          Развертывание создано! В течение скорого времени стенды указанной группы будут удалены. Вы можете наблюдать за ними во вкладке "Стенды" выбранного шаблона.
    $of _
  $if totallyEmpty
    <h1 .title.is-3> Нет доступных развертываний!
  $else
    <h1 .title.is-3> Доступные развертывания
    <div .columns.is-multiline>
    $forall (DeploymentTemplate { .. }) <- deployments
      <div .column>
        <div .card>
          <header .card-header>
            <p .card-header-title>
              #{templateTitle}
          <div .card-content>
            <p> Состав развертывания
            <table .table.is-fullwidth>
              <thead>
                <tr>
                  <th> Название VM
                  <th> Память/ядер
                  <th> Родительский шаблон
                  <th> Подключенные сети
                  <th> Доступна пользователю
              <tbody>
                $forall vm <- templateVMs
                  $case vm
                    $of (TemplatedConfigVM { .. })
                      <tr>
                        <td> #{configVMName}
                        <td> #{fromMaybe "-" (fmap show configVMMemory)} / #{fromMaybe "-" (fmap show configVMCores)}
                        <td> #{configVMParentTemplate}
                        <td> #{intercalate ", " (map configVMNetworkName (fromMaybe [] configVMNetworks))}
                        <td>
                          $if elem (T.pack configVMName) templateAvaiableVMs
                            Да
                          $else
                            Нет
            <p> Развертывание
            <form .form.is-flex.is-flex-direction-row.is-align-items-center action=/deployment/#{templateId}/deploy>
              <p> Целевая группа Keycloak
              <input .input type=text name=group>
              <div .select>
                <select name=action>
                  <option disabled> Выберите вариант
                  <option value=deploy> Создать стенд
                  <option value=destroy> Удалить стенд
              <button .button> Выполнить
          <footer .card-footer>
            <a .card-footer-item href=/deployment/#{templateId}/instances> Стенды
            <a .card-footer-item href=/deployment/#{templateId}/edit> Редактировать
            <a .card-footer-item href=/deployment/#{templateId}/delete> Удалить
    <nav .pagination.is-centered>
      <ul .pagination-list>
        $if page /= 1
          <li>
            <a .pagination-link href=/deployment/my?page=#{preEscapedToHtml $ page - 1}> #{page - 1}
        <li>
          <a .pagination-link.is-current> #{page}
        $if hasNext
          <li>
            <a .pagination-link href=/deployment/my?page=#{preEscapedToHtml $ page + 1}> #{page + 1}
|]

indexPage :: Maybe BearerWrapper -> Maybe Int -> AppT Html
indexPage t pageN = let
  anonBody = [shamlet|
<div .container>
  <h1 .title.is-3> Привет, $userName!
  <p> Войди, чтобы получить доступ к лабам
      |]
  in do
  token <- lookupToken' t
  case token of
    InactiveToken -> do
      baseTemplate token Nothing (Just "Index") anonBody Nothing
    (ActiveToken { .. }) -> do
      let page = unpackPage pageN
      deploymentEnv <- asks $ getEnvFor DeploymentService
      let ~(Just userToken) = t
      instanceResp@(PagedResponse {responseTotal=instanceTotal, responseObjects=instances}) <- globalDecoder' $ defaultRetryClientC deploymentEnv $ C.getMyTemplateInstances (Just page) userToken
      let hasNext = hasNextPages page instanceResp
      let totallyEmpty = page == 1 && instanceTotal == 0
      (\v -> baseTemplate token Nothing (Just "Index") v Nothing) [shamlet|
<div .container>
  $if totallyEmpty
    <h1 .title.is-3> Доступных лаб нет!
  $else
    <h1 .title.is-3> Доступные стенды
    <div .columns.is-multiline>
    $forall (DeploymentInstanceBrief { .. }) <- instances
      <div .column>
        <div .card>
          <header .card-header>
            <p .card-header-title>
              #{ briefDeploymentTitle }
          <footer .card-footer>
            <a .card-footer-item href=/instance/#{briefDeploymentId}> Открыть
    <nav .pagination.is-centered>
      <ul .pagination-list>
        $if page /= 1
          <li>
            <a .pagination-link href=/?page=#{preEscapedToHtml $ page - 1}> #{page - 1}
        <li>
          <a .pagination-link.is-current> #{page}
        $if hasNext
          <li>
            <a .pagination-link href=/?page=#{preEscapedToHtml $ page + 1}> #{page + 1}
|]

instanceSchemaPage :: Text -> Maybe BearerWrapper -> AppT Html
instanceSchemaPage dID t = do
  token <- requireToken' t
  let ~(Just userToken) = t
  krokiEnv <- asks $ getEnvFor KrokiProxy
  topologyReq <- defaultRetryClientC krokiEnv (renderInstanceDiagram dID userToken)
  (\v -> baseTemplate token Nothing (Just "Топология") v Nothing) [shamlet|
<div .container>
  <a .button href="/instance/#{dID}"> Вернуться назад
  $case topologyReq
    $of (Right svg)
      #{preEscapedToMarkup svg}
    $of Left _
      <p> Ошибка рендеринга!
|]

instancePage :: Text -> Maybe BearerWrapper -> Maybe Text -> AppT Html
instancePage dID t (Just vmPort) = do
  _ <- requireToken' t
  let ~(Just userToken) = t
  deploymentEnv <- asks $ getEnvFor DeploymentService
  _ <- globalDecoder' $ defaultRetryClientC deploymentEnv (C.switchVMPortPower vmPort userToken)
  tempRedirectTo $ "/instance/" <> T.unpack dID
instancePage dID t Nothing = do
  deploymentEnv <- asks $ getEnvFor DeploymentService
  token <- requireToken' t
  let ~(Just userToken) = t
  d@(DeploymentInstance { instanceDeployConfig = unsafeConfig,.. }) <- globalDecoder' $ defaultRetryClientC deploymentEnv (C.getDeploymentInstance dID userToken)
  let instanceDeployConfig = fmap (\c@(DeployConfig { deployParameters = p, deployAgent = a }) -> c { deployParameters = p { deployToken = Nothing }, deployAgent = fmap (\agent -> agent { configAgentToken = "" }) a }) unsafeConfig
  krokiEnv <- asks $ getEnvFor KrokiProxy
  topologyReq <- defaultRetryClientC krokiEnv (renderInstanceDiagram dID userToken)

  let showText = "open ? 'Закрыть' : 'Открыть'" :: String
  let getPowerUrl key = "/instance/" <> T.unpack dID <> "?power=" <> key

  (\v -> baseTemplate token Nothing (Just . T.unpack $ instanceTitle) v Nothing) [shamlet|
<div .container>
  <h1 .title.is-3> #{instanceTitle}
  $case topologyReq
    $of (Right svg)
      <div x-data="{ open: false }">
        <div .is-flex.is-flex-direction-row>
          <div .pr-5>
            <h2 .subtitle.is-4> Автоматическая топология
          <div .is-flex.is-flex-direction-row>
            <button .button @click="open = ! open" x-text=#{showText}>
            <a target=_blank .button href=/instance/#{dID}/schema> В новом окне
        <div .is-max-tablet.container x-show="open"> #{preEscapedToMarkup svg}
    $of Left _
  <table .table.is-fullwidth>
    <thead>
      <tr>
        <th> Имя виртуальной машины
        <th> Ссылка подключения
        <th> Состояние питания
        <th>
    <tbody>
      $forall (key, value) <- M.toList instanceVMLinks
        <tr>
          <td> #{key}
          <td>
            <a href=/vnc/#{value}> подключиться
          <td>
            $case M.lookup key instanceVMPower
              $of (Just True)
                включена
              $of (Just False)
                выключена
              $of Nothing
                неизвестно
          <td>
            $with powerUrl <- getPowerUrl (T.unpack value)
              <a .button href=#{powerUrl}>
                $case M.lookup key instanceVMPower
                  $of (Just True)
                    Выключить
                  $of _
                    Включить
  $case instanceDeployConfig
    $of (Just deployConfig)
      <div x-data="{ open: false }">
        <div .is-flex.is-flex-direction-row>
          <div .pr-5>
            <h2 .subtitle.is-4> Отладочная информация
              <i .pl-1>
                (видна администратору)
          <div>
            <button .button @click="open = ! open" x-text=#{showText}>
        <div x-show="open"> #{ LBS.unpack $ encodePretty deployConfig}
    $of Nothing
  $if (not . null) instanceLogs
    <div x-data="{ open: false }">
      <div .is-flex.is-flex-direction-row>
        <div .pr-5>
          <h2 .subtitle.is-4> Логи развертывания
            <i .pl-1>
              (видны администратору)
        <div>
          <button .button @click="open = ! open" x-text=#{showText}>
      <div x-show="open">
        <ul>
          $forall logString <- instanceLogs
            <li> #{logString}
|]
