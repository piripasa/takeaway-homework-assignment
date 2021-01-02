#!/usr/bin/env bash

set -e

docker-compose down
echo "Starting services"
docker-compose up -d

docker-compose exec php cp /var/www/html/.env.example /var/www/html/.env
echo "Installing dependencies"
docker-compose run --rm composer install
docker-compose run --rm npm install
docker-compose run --rm npm run prod
docker-compose run --rm php chgrp -R www-data storage
docker-compose run --rm php chmod -R ug+rwx storage

#echo "Unit testing..."
#sudo docker-compose exec php vendor/bin/phpunit
