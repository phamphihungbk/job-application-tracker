.PHONY: up ## docker up docker container
up:	files-copy
	docker-compose -f ./environment/development.yml --env-file .env up -d --remove-orphans

.PHONY: build ## docker build docker image
build: files-copy
	docker-compose -f ./environment/development.yml --env-file .env build

.PHONY: npm install ## run npm install inside docker container
npm-install:
	docker exec -it job-app-tracker sh -c "npm install"

.PHONY: files-copy ## copy necessary files
files-copy:
	cp ./config/env.dev ./.env
