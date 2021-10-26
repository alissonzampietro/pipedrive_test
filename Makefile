start:
	docker-compose down
	docker-compose up --force-recreate --remove-orphans

stop:
	docker-compose down

.PHONY: run
