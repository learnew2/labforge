module Models (QueryRequest(..)) where

import           Data.Text

data QueryRequest = GroupDeployment Int Text | AllocateNode Text | DeployInstance Text | DestroyInstance Text deriving (Show, Eq)
