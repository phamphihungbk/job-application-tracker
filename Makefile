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
	docker exec -it backend-app-tracker sh -c "npm install"

.PHONY: db-create ## create postgres database
db-create:
	docker exec -it database-app-tracker sh -c "bash /docker-entrypoint-initdb.d/createdb.sh"

.PHONY: db-migrate ## run migration
db-migrate:
	docker exec -it backend-app-tracker sh -c "npm run migrate"

.PHONY: db-seed ## run database seeding
db-seed:
	docker exec -it backend-app-tracker sh -c "npm run db:seed"

.PHONY: files-copy ## copy necessary files
files-copy:
	cp ./environment/postgres/docker-entrypoint-initdb.d/createdb.sh.example ./environment/postgres/docker-entrypoint-initdb.d/createdb.sh
	cp ./config/env.dev ./.env

.PHONY: db-list ## list all database tables
db-list:
	docker exec -it database-app-tracker sh -c "psql -l"

.PHONY: postgres-extension ## install all extensions for postgres
postgres-extension:
	docker exec -it database-app-tracker sh -c "bash /docker-entrypoint-initdb.d/createExtension.sh"

.PHONY: backend-dev ## run backend with development mode
backend-dev:
	docker exec -it backend-app-tracker sh -c "npm run dev"

.PHONY: frontend-build ## build frontend with production mode
frontend-build:
	docker exec -it frontend-app-tracker sh -c "yarn install && yarn run build:prod"

.PHONY: prod ## start job tracker web application in production mode
prod:
	cp ./config/env.prod ./.env
	docker exec -i frontend-app-tracker sh -c "yarn install && yarn run build:prod"
	docker exec -it backend-app-tracker sh -c "npm run start"

.PHONY: host ## add domain host into your host file
host:
	sudo -- sh -c -e "echo '127.0.0.1 api.jobtracker.local\n127.0.0.1 jobtracker.local' >> /etc/hosts"
