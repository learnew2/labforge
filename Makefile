HS_SERVICES=auth-service cluster-manager deployment-api
IMAGES_LIST=labforge-auth
COMPOSE_BIN=docker compose
ENV_FILE=.env
BASE_COMPOSE_COMMAND=$(COMPOSE_BIN) --project-name labforge
DEV_COMPOSE_FILE=deployment/docker-compose.yml

build-nginx: ./deployment/nginx/Dockerfile
	docker build -t labforge-nginx -f ./deployment/nginx/Dockerfile .

build-bin: $(HS_SERVICES)
	@for n in $(HS_SERVICES); do \
		(cd $$n && echo "Building $$n" && stack build); \
	done

install-deps: $(HS_SERVICES)
	@for n in $(HS_SERVICES); do \
		(cd $$n && stack install --only-dependencies); \
	done

build-images:
	make -C auth-service build-image

./images:
	mkdir ./images -p

./static/js:
	mkdir ./static/js -p

./static/css:
	mkdir ./static/css -p

build-lib-image: deployment/Dockerfile
	docker build -t labforge-haskell -f deployment/Dockerfile .

deploy-dev: $(DEV_COMPOSE_FILE)
	$(BASE_COMPOSE_COMMAND) -f $(DEV_COMPOSE_FILE) up -d

stop-dev: $(DEV_COMPOSE_FILE)
	$(BASE_COMPOSE_COMMAND) -f $(DEV_COMPOSE_FILE) stop

start-dev: $(DEV_COMPOSE_FILE)
	$(BASE_COMPOSE_COMMAND) -f $(DEV_COMPOSE_FILE) start

destroy-dev: $(DEV_COMPOSE_FILE)
	$(BASE_COMPOSE_COMMAND) -f $(DEV_COMPOSE_FILE) down
