HS_SERVICES=auth-service cluster-manager deployment-api frontend-server
IMAGES_LIST=auth-service cluster-manager deployment-api frontend-server labforge-websockify labforge-nginx-prod
COMPOSE_BIN=docker compose
ENV_FILE=.env
BASE_COMPOSE_COMMAND=$(COMPOSE_BIN) --project-name labforge
DEV_COMPOSE_FILE=deployment/docker-compose.yml

update-tokens:
	curl localhost:8001/api/cluster/websockify/config -o deployment/websockify/tokens.cfg

build-nginx-prod:
	docker build --build-arg config_dir=deployment/nginx/conf.prod --build-arg ssl_dir=deployment/nginx/ssl-prod -t labforge-nginx-prod -f ./deployment/nginx/Dockerfile .

build-nginx: ./deployment/nginx/Dockerfile
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

save-images: ./images
	@for n in $(IMAGES_LIST); do \
		echo "Saving $$n" && docker save $$n -o ./images/$$n.tar; \
	done

restore-images: ./images
	@for n in $(IMAGES_LIST); do \
		echo "Restoring $$n" && docker load -i ./images/$$n.tar; \
	done

./images:
	mkdir ./images -p
