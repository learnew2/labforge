module Utils where

iterLetters :: Int -> [String]
iterLetters 1 = map (:[]) ['a'..'z']
iterLetters n = do
  s <- iterLetters 1
  v <- iterLetters (n - 1)
  pure $ s <> v
