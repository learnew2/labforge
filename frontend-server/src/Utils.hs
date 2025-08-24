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
module Utils where

import           Api
import           Api.Keycloak.Models
import           Api.Keycloak.Models.Introspect
import           Auth.Token
import           Config
import           Data.Aeson
import           Data.Maybe
import           Deployment.Models.Deployment
import           Models.JSONError
import           Servant

prettyDeployStatus :: DeploymentStatus -> String
prettyDeployStatus Deployed   = "Развернут"
prettyDeployStatus Deploying  = "Развертывается"
prettyDeployStatus Destroying = "Удаляется"
prettyDeployStatus Failed     = "Ошибка"
prettyDeployStatus Created    = "Ожидает развертывания"

unpackPage :: Maybe Int -> Int
unpackPage = max 1 . fromMaybe 1

hasNextPages :: Int -> PagedResponse a -> Bool
hasNextPages page (PagedResponse {responseTotal=totalAmount, responsePageSize=pageSize }) =
  totalAmount - page * pageSize > 0

requireToken' :: Maybe BearerWrapper -> AppT IntrospectResponse
requireToken' Nothing = sendJSONError err401 (JSONError "" "" Null)
requireToken' (Just (BearerWrapper token)) = requireToken token

lookupToken' :: Maybe BearerWrapper -> AppT IntrospectResponse
lookupToken' Nothing                      = pure InactiveToken
lookupToken' (Just (BearerWrapper token)) = lookupToken token
