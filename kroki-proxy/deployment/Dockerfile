FROM labforge-haskell AS builder
WORKDIR /usr/src/app
COPY *.cabal package.yaml stack.yaml stack.yaml.lock ./
RUN stack install --only-dependencies
COPY . .
RUN stack install --copy-bins

FROM debian:12-slim AS runner
ENV TZ="Europe/Moscow"
RUN apt-get update && apt-get install ca-certificates locales libpq-dev -y
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
WORKDIR /usr/src/app
COPY --from=builder /root/.local/bin/kroki-proxy /usr/src/app/haskell-binary
CMD /usr/src/app/haskell-binary -v migrate && /usr/src/app/haskell-binary run -p 8000
