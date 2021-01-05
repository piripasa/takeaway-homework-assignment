#!/usr/bin/env bash

set -e
 [ -f ".env.example" ] || $(echo Please make an .env.example file --env=docker; exit 1)
export $(cat .env.example | grep -v ^# | xargs);

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

echo "PHP Unit testing..."
docker-compose run --rm php vendor/bin/phpunit

echo "React Unit testing..."
docker-compose run --rm npm test

echo "Go to $APP_URL"
