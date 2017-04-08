# ToDo MVC Backend 
##### Developed by Ramon Reyes & Colin Van Sickle <br>
[![Build Status](https://travis-ci.org/Cohort-9/todo-ramon-colin.svg?branch=master)](https://travis-ci.org/Cohort-9/todo-ramon-colin)
#### Introduction
This project uses server-side frameworks via RESTful API endpoints to mirror the functionality of the [ToDoMVC](http://todomvc.com/) client. It uses [Express.js](http://expressjs.com), [Knex.js](http://knexjs.com), and stores the list on a [PostgreSQL](https://www.postgresql.org)L database hosted on [ElephantSQL](https://www.elephantsql.com/).

Here's a brief description taken from [Todo-Backend's](http://www.todobackend.com/) website:

>"The Todo-Backend project helps showcase and compare different language and framework combinations for building web services. This website defines a simple web API in the form of a todo list and users can create their own identical APIs using various tech stacks. This website then provides a spec runner to verify that the user implementation is identical to the base implementation."

Our build (Express, Knex, and PostgreSQL) is one of few server-side framework combinations that has not been featured on  [Todo-Backend's](http://www.todobackend.com/) homepage as a successfully developed framework for the project.
<br>
<br>
#### You'll be using these links as entry points to the backend:<br>
Server-side API root: http://www.todobackend.com/specs/index.html <br>
Client-side API root:  https://www.todobackend.com/client/index.html <br>

#### Further documentation:<br>
https://github.com/postgres/postgres <- postgres documentation <br>
http://knexjs.org/#Builder <- knex documentation <br>

## 1) install dependencies
```
// cd into your project in terminal 
> npm install
```
## 2) setting up your postgres database (local & elephantSQL)
you have two options a) local db or b) elephantSQL db.
we recommend you use elephantSQL.
### a) local db
```
// if you don't have postgres db installed already make sure you do
> brew install postgres
// it is recommended you create a new user
> createuser -Pw --interactive 
// create a new db, substitute whichever user you’ve just made for ‘dev’ 
> createdb dev -U todo-list
// enter psql shell
> psql -U dev todo-list
```
### b) elephantSQL db
* Go to https://www.elephantsql.com/ and create an account. <br>
* This service creates a remote and active database online which can be entered via terminal’s psql shell
```
// the link in the 'URL' field of the 'Details' page post-db creation connects you to the db in terminal
// the link below is fake but I have it here to show how your 'URL' should look 
> psql postgres://aslkfj;lfwlkfp-5456@stampy.db.elephantsql.com:sdfa/ascwefevq 
```

## 3) creating the data
```
// Note that order is a reserved word and needs to be in quotations.
> CREATE TABLE todos(id serial PRIMARY KEY, title text  NOT NULL, content boolean DEFAULT FALSE, url text, ”order” integer);
```
## 4) starting the server
```
> npm start 
```




