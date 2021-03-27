ifneq (,$(wildcard ./.env))
	include .env
	export
	ENV_FILE_PARAM = --env-file .env
endif

build_dev:
	docker-compose up --build

build_prod:
	docker-compose -f docker-compose.prod.yaml up --build

up:
	docker-compose up

down: 
	docker-compose down

prune:
	docker image prune

sys_prune:
	docker system prune

check_config:
	docker-compose config

image_state:
	docker-compose ps

container_state:
	docker ps

volume:
	docker volume inspect memories_mongodb-data

# check USER
check_backend_user:
	docker exec memories-backend  ps aux

check_frontend_user:
	docker exec memories-backend  ps aux

check_nginx_user:
	docker exec memories_nginx_1 ps aux

delete_volume:
	docker volume rm $(docker volume ls -qf dangling=true)

delete_volumes:
	docker system prune --volumes

check_user:
	docker exec $(image_name)  ps aux