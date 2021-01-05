# Takeaway Homework Assignment

### Framework & tools

- Lumen 6.0 (PHP framework)
- Composer (for installing dependencies)
- npm (for installing js dependencies)
- react js & redux (for client side rendering)
- Docker


### Installation
This is a dockerized application.

Make sure: 
* `docker` & `docker-compose` installed in your PC.

To do:

- Checkout and `cd project_directory/` to go to the project root directory.
- `sh ./start.sh` (will do installation)
- `docker-compose run --rm composer install` for installing dependencies
- `docker-compose run --rm php vendor/bin/phpunit` for PHPUnit test
- `docker-compose run --rm npm install` for installing js dependencies
- `docker-compose run --rm npm test` for React test
 
 Base url `http://localhost:8000`.

 
 ### CheckList
 
 - [x] Restaurant list fetch API with filtering
 - [x] Render list in client side
 - [x] Filter list by opening status
 - [x] Filter list by name
 - [x] Sort list by sorting values
 - [x] Sorting list by ascending/descending order
 - [x] Add/Remove favourite 
 - [x] Render favourite list
 - [x] Remove user from group - admin
 - [x] PHP unit test cases
 - [x] React unit test cases
 - [x] Load restaurants on scroll
