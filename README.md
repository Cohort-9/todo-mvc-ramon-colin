# todo-mvc-backend-knex

Our project is a knex postgreSQL-based server-side build that fulfills the challenges outlined  http://todobackend.com/.

Todobackend is a server-side version of http://todomvc.com/ wherein developers can create and compare different frameworks and combinations which can create asimple todolist API.

This code passes all of the specs outlined and required in the back-end using two [postgreSQL](https://www.postgresql.org) and [Knex] (http://knexjs.com).
Using these libraries as a framework for our build helped us refine our general understanding of SQL, postgres, knex, express, travis, mocha, chai, heroku, and dotenv technologies.

Our build is a rare combination and it appears knex has not been officially added as a successfully developed framework for the project. 

## I) install dependencies
```
// cd into your project in terminal;
>npm install

// make sure all other servers are turned off
>npm start 

// optionally you can also use nodemon
>nodemon server.js

```
## II) setting up your postgres db 
you have two options 1) local db or 2) elephantSQL

```
// local version
// if you don't have postgres db installed already make sure you do
>brew install postgres
// check which user you are 
>whoami
// create a new user
>createuser -Pw --interactive 
//create a new db 
>createdb dev -U todo-list
// enter psql shell
>psql -U dev

```
CREATE TABLE inspectors(
  id serial PRIMARY KEY,
  modified timestamp DEFAULT current_timestamp,
  first_name text NOT NULL,
  last_name text NOT NULL,
  borough borough_options);


## I) install dependencies
## II) setting up your postgres db (local & elephantSQL)
## III) running the server
## IV) explaining how to use todobackend.com

//Go to https://www.elephantsql.com/ and create an account. Sign up directly, or join through GitHub or GMail.
//Next create a database instance, You do this by
//Once you create a new instance, click on it to access database server information
//Open terminal and type in 
>sql <elphant url>
//this should connect you to the elephant server
//

elephantSQL>create 


