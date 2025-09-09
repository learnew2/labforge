HS_SERVICES=auth-service cluster-manager deployment-api frontend-server kroki-proxy
IMAGES_LIST=auth-service cluster-manager deployment-api frontend-server kroki-proxy labforge-websockify labforge-nginx-prod postgres:15-alpine quay.io/keycloak/keycloak:26.2.5 redis:8.2.0-bookworm yuzutech/kroki
COMPOSE_BIN=docker compose
ENV_FILE=.env
BASE_COMPOSE_COMMAND=$(COMPOSE_BIN) --project-name labforge
DEV_COMPOSE_FILE=deployment/docker-compose.yml
PROD_COMPOSE_FILE=deployment/prod.docker-compose.yml

fill-keycloak: install/keycloak.sh
	docker cp install/keycloak.sh keycloak:/tmp/
	docker exec keycloak bash /tmp/keycloak.sh
	docker cp keycloak:/tmp/clients.json ./.clients.json

update-tokens:
	curl localhost:8001/api/cluster/websockify/config -o deployment/websockify/tokens.cfg

build-nginx-prod: ./deployment/nginx/Dockerfile ./labforge-docs
	docker build --build-arg config_dir=deployment/nginx/conf.prod --build-arg ssl_dir=deployment/nginx/ssl-prod -t labforge-nginx-prod -f ./deployment/nginx/Dockerfile .

build-nginx: ./deployment/nginx/Dockerfile ./labforge-docs
	docker build -t labforge-nginx -f ./deployment/nginx/Dockerfile .

build-bin: $(HS_SERVICES)
	@for n in $(HS_SERVICES); do \
		(cd $$n && echo "Building $$n" && stack build); \
	done

build-websockify: ./deployment/websockify/Dockerfile
	docker build -t labforge-websockify -f ./deployment/websockify/Dockerfile .

install-deps: $(HS_SERVICES)
	@for n in $(HS_SERVICES); do \
		(cd $$n && stack install --only-dependencies); \
	done

build-images:
	@for n in $(HS_SERVICES); do \
		(cd $$n && echo "Building $$n" && make build-image); \
	done

./images:
	mkdir ./images -p

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

deploy-prod-minimal: $(PROD_COMPOSE_FILE)
	$(BASE_COMPOSE_COMMAND) -f $(PROD_COMPOSE_FILE) up -d

destroy-prod-minimal: $(PROD_COMPOSE_FILE)
	$(BASE_COMPOSE_COMMAND) -f $(PROD_COMPOSE_FILE) down

deploy-prod: $(PROD_COMPOSE_FILE)
	$(BASE_COMPOSE_COMMAND) -f $(PROD_COMPOSE_FILE) --profile app up -d

destroy-prod: $(PROD_COMPOSE_FILE)
	$(BASE_COMPOSE_COMMAND) -f $(PROD_COMPOSE_FILE) --profile app down

define escape_image
$(shell echo $(1) | sed 's/\//-/g')
endef

save-service-images: ./images
	$(foreach image, $(HS_SERVICES), \
		echo "Saving $(image)"; docker save $(image) -o ./images/$(call escape_image, $(image)).tar;)

restore-service-images: ./images
	$(foreach image, $(HS_SERVICES), \
		echo "Restoring $(image)"; docker load -i ./images/$(call escape_image, $(image)).tar;)

save-images: ./images
	$(foreach image, $(IMAGES_LIST), \
		echo "Saving $(image)"; docker save $(image) -o ./images/$(call escape_image, $(image)).tar;)

restore-images: ./images
	$(foreach image, $(IMAGES_LIST), \
		echo "Restoring $(image)"; docker load -i ./images/$(call escape_image, $(image)).tar;)

bundle:
	tar -cvf labforge.tar deployment/ *-sample.env Makefile images/
