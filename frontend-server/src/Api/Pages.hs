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
import           Api.Redirect
import           Api.Retry
import           Api.Utils
import           Config
import           Control.Monad.Logger
import           Control.Monad.Reader
import           Data.Aeson
import           Data.Aeson.Encode.Pretty
import qualified Data.ByteString.Char8                    as BS
import qualified Data.ByteString.Lazy.Char8               as LBS
import           Data.Functor                             ((<&>))
import qualified Data.Map                                 as M
import           Data.Text                                (Text)
import qualified Data.Text                                as T
import           Database
import           Database.Persist
import qualified Deployment.Client                        as C
import           Deployment.Models.Deployment
import           Models.JSONError
import           Proxmox.Deploy.Models.Config
import           Proxmox.Deploy.Models.Config.Deploy
import           Proxmox.Deploy.Models.Config.DeployAgent
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
  :<|> "vnc" :> Capture "vmPort" Text :> AuthHeader' :> Get '[HTML] Html
  :<|> "test" :> Get '[HTML] Html

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
pagesServer = indexPage :<|> notFound :<|> internalError :<|> noRights :<|> instancePage :<|> vncPage :<|> testPage

testPage :: AppT Html
testPage = do
  baseTemplate InactiveToken Nothing (Just "test") v Nothing where
    indexKey :: [(String, String)]
    indexKey = [(":key", "index")]
    v = [shamlet|
<form x-data="{'vms': []}">
  <p x-text="JSON.stringify(vms)"></p>
  <template x-for="(obj, index) in vms" *{indexKey}>
    <input type="text" name="vms[][name]">

  <button @click="vms.push([])"> Add VM
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
      (\v -> baseTemplate token Nothing (Just "Index") v Nothing) [shamlet|
<div .container>
  $if instanceTotal == 0
    <h1 .title.is-3> Доступных лаб нет!
  $else
    <h1 .title.is-3> Доступные стенды
    $forall (DeploymentInstanceBrief { .. }) <- instances
      <div .columns.is-multiline>
        <div .column>
          <div .card>
            <header .card-header>
              <p .card-header-title>
                #{ briefDeploymentTitle }
            <footer .card-footer>
              <a .card-footer-item href=/instance/#{briefDeploymentId}> Открыть
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

  let showText = "open ? 'Закрыть' : 'Открыть'" :: String
  let getPowerUrl key = "/instance/" <> T.unpack dID <> "?power=" <> key

  (\v -> baseTemplate token Nothing (Just . T.unpack $ instanceTitle) v Nothing) [shamlet|
<div .container>
  <h1 .title.is-3> #{instanceTitle}
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
