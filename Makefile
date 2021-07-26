.PHONY: up ## docker up docker container
up:	files-copy
	docker-compose -f ./environment/development.yml --env-file .env up -d --remove-orphans

.PHONY: build ## docker build docker image
build: files-copy
	docker-compose -f ./environment/development.yml --env-file .env build

.PHONY: down ## docker stop docker container
down:
	docker-compose -f ./environment/development.yml down --remove-orphans

.PHONY: npm install ## run npm install inside docker container
npm-install:
	docker exec -it job-app-tracker sh -c "npm install"

.PHONY: db-create ## create postgres database
db-create:
	docker exec -it postgres-app-tracker sh -c "bash /docker-entrypoint-initdb.d/createdb.sh"

.PHONY: files-copy ## copy necessary files
files-copy:
	cp ./environment/postgres/docker-entrypoint-initdb.d/createdb.sh.example ./environment/postgres/docker-entrypoint-initdb.d/createdb.sh
	cp ./config/env.dev ./.env

.PHONY: db-list ## list all database tables
db-list:
	docker exec -it postgres-app-tracker sh -c "psql -l"
