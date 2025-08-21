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
{-# LANGUAGE QuasiQuotes #-}
module Templates.Base where

import           Data.Maybe
import           Data.Text
import           Text.Blaze.Html
import           Text.Hamlet
import           Text.Shakespeare

baseTemplate :: Maybe Html -> Maybe String -> Html -> Maybe Html -> Html
baseTemplate head' title' body afterBody = [shamlet|
$doctype 5
<html>
  <head>
    <title> #{fromMaybe "Labforge" title'}
    $case head'
      $of (Just headHtml)
        ^{headHtml}
      $of Nothing
    <meta charset=utf-8>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  <body>
    ^{body}
  $case afterBody
    $of (Just afterHtml)
      ^{afterHtml}
    $of Nothing
|]
