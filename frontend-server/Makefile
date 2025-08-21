run:
	stack run -- -v -p 8003

build-image: deployment/Dockerfile
	docker build -t frontend-server -f deployment/Dockerfile .
