run:
	stack run -- -v run -p 8001

build-image: deployment/Dockerfile
	docker build -t cluster-manager -f deployment/Dockerfile .
