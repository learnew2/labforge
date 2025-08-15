run:
	stack run -- -v run -p 8001

build-image: deployment/Dockerfile
	docker build -t api-service-template -f deployment/Dockerfile .
