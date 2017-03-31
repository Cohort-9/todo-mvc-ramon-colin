# todo-mvc-backend-knex
***description***: Thinkful Capstone II<br>
***assignment***: Backend framework for the popular http://todomvc.com/ <br>
***authors***: Ramon Reyes(@reyesjunk) + Colin Van Sickle (@cfv7)<br>
/*---------------------------------------------------------------------*/

Our project is a knex postgreSQL-based server-side build that fulfills the challenges outlined  http://todobackend.com/.

Todobackend is a series of functionality and HTTP tests for those who create server-side models of [TodoMVC]( http://todomvc.com/). Developers can create and compare different frameworks and combinations which can create asimple todolist API.
<br>
This code passes all of the specs outlined and required in the back-end using two [postgreSQL](https://www.postgresql.org) and [Knex] (http://knexjs.com).
Using these libraries as a framework for our build helped us refine our general understanding of SQL, postgres, knex, express, travis, mocha, chai, heroku, and dotenv technologies.
<br>
Our build is a rare combination and it appears knex has not been officially added as a successfully developed framework for the project. 
<br>
<br>
you'll be using these links as entry points to the backend:<br>
Front-end API root: http://www.todobackend.com/specs/index.html <br>
Back-end API root:  https://www.todobackend.com/client/index.html <br>

further documentation:<br>
https://github.com/postgres/postgres <- postgres documentation <br>
http://knexjs.org/#Builder <- knex documentation <br>

## 1) install dependencies
```
// cd into your project in terminal;
>npm install

// make sure all other servers are turned off
>npm start 

// optionally you can also use nodemon
>nodemon server.js

```
## 2) setting up your postgres db (local & elephantSQL)
you have two options a) local db or b) elephantSQL.
Remember, you’ll need to use elephantSQL to store your data online once your app has been deployed to heroku and travis. 
### a) local db
```
// if you don't have postgres db installed already make sure you do
>brew install postgres
// check which user you are 
>whoami
// create a new user
>createuser -Pw --interactive 
//create a new db, substitute whichever user you’ve just made for ‘dev’ 
>createdb dev -U todo-list
// enter psql shell
>psql -U dev
```
### b) elephantSQL db
Go to https://www.elephantsql.com/ and create an account. <br>
Sign up directly, or join through GitHub / GMail.<br>
IMAGE
This service creates  your database for you so to enter the database in terminal’s psql shell
You’ll only need to include the link.  The creation of table is nearly identical
When you go to the dashboard you should see an option for creating a new database instance.

## 3) creating the data
```
>CREATE TABLE todos(
  >id serial PRIMARY KEY,
  >title text  NOT NULL,
  >content boolean DEFAULT FALSE,
  >url text
>”order” integer);
//Note that order is a reserved word and needs to be in quotations.
```
## 4) explaining how to use todobackend.com




