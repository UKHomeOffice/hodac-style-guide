SERVICE_NAME=hod-styleguide
VERSION=$(shell git rev-parse --short HEAD)

all: clean build

clean:
	rm -rf ./node_modules \
		./tmp \
		./export

version:
	echo $(VERSION) > VERSION

build: version build-image

build-image:
	docker build -t $(SERVICE_NAME):latest .
	docker tag $(SERVICE_NAME):latest \
		$(SERVICE_NAME):$(VERSION)
	-docker ps -qaf status=exited | xargs docker rm
	-docker images -qaf dangling=true | xargs docker rmi
	docker images | grep $(SERVICE_NAME)

up:
	-docker-compose down
	docker-compose up -d


down:
	docker-compose stop
	docker-compose logs
	docker-compose down
