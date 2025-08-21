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
{-# LANGUAGE QuasiQuotes       #-}
{-# LANGUAGE RecordWildCards   #-}
{-# LANGUAGE TemplateHaskell   #-}
{-# LANGUAGE TypeOperators     #-}
module Api.Pages
  ( pagesServer
  , PagesAPI
  ) where

import           Config
import           Control.Monad.Logger
import           Data.Aeson
import qualified Data.Text            as T
import           Database
import           Database.Persist
import           Servant
import           Servant.HTML.Blaze
import           Templates.Base
import           Text.Blaze.Html
import           Text.Hamlet

type PagesAPI = Get '[HTML] Html
  :<|> "notfound" :> Get '[HTML] Html
  :<|> "internalerror" :> Get '[HTML] Html

pagesServer :: ServerT PagesAPI AppT
pagesServer = indexPage :<|> notFound :<|> internalError

internalError :: AppT Html
internalError = do
  pure $ baseTemplate Nothing (Just "Ошибка!") body Nothing where
    body = [shamlet|
<h1> Вы что-то нажали
<h2> и все пропало :(
|]

notFound :: AppT Html
notFound = do
  pure $ baseTemplate Nothing (Just "Страница не найдена!") body Nothing where
    body = [shamlet|
<h1> Упс!
<h2> такой страницы нет
|]

indexPage :: AppT Html
indexPage = do
  pure $ baseTemplate Nothing (Just "Index") body (Just after) where
    body = [shamlet|
<div>
  <h1> Hello!
  <p> this is index
      |]
    after = [shamlet|
<script>
  alert("Test!")
|]
