const express = require('express');
const bodyParser = require('body-parser');
const {DEV} = require('./config');
const knex = require('knex')(DEV);
const app = express();
let toDo = [];

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "DELETE, POST, PUT, GET, PATCH, OPTIONS"
  });  
  next();
});


app.get('/', (req, res) => {
  knex.select('title', 'completed', 'id', 'url')
  .from('todo')
  .then(results => {
    const output = results.map(function(todo) {
      todo.url = `${req.protocol}://${req.get('host')}/${todo.id}`
      console.log(todo.url);
      return todo
    });
    res.json(output);
  });  
});

// url: `${req.protocol}://${req.get('host')}/${todo.id}`
app.post('/', (req, res) => {
  knex('todo').insert({title: req.body.title})
  .returning(['title', 'completed', 'id', 'url'])
  .then( results => {
    const output = results.map(function(todo) {
      todo.url = `${req.protocol}://${req.get('host')}/${todo.id}`
      console.log(todo.url);
      return todo
    });
    res.json(output[0]);
  });  
});

app.get('/:id', (req, res) => {
  knex.select('title', 'id').from('todo')
  .where({id: req.params.id})
  // .returning(['title', 'completed', 'id', 'url'])
  .then( results => {
    const output = results.map(function(todo) {
      todo.url = `${req.protocol}://${req.get('host')}/${todo.id}`
      console.log(todo.url);
      return todo
    });
    res.json(output[0]);
  });  
});


app.delete('/', (req, res) => {
  // res.json({});
  knex('todo')
    .del()
    .then(result => {
      return res.status(202).send('delete success');
    });
});

app.listen(process.env.PORT || 8080);

exports.app = app;
