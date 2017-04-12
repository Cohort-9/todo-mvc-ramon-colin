const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const {DEV} = require('./config');
const knex = require('knex')(DEV);
const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "DELETE, POST, PUT, GET, PATCH, OPTIONS"
  });  
  next();
});

function outputId(results, req) {
  return results.map(function(todo) {
    todo.url = `${req.protocol}://${req.get('host')}/${todo.id}`;
    return todo;
  });
}

app.get('/', (req, res) => {
  knex
    .select('title', 'completed', 'id', 'url', 'order')
    .from('todo')
    .then(results => {
      res.json(outputId(results, req));
    });  
});

app.post('/', (req, res) => {
  knex('todo')
    .insert({title: req.body.title,
      order: req.body.order
    }) //<--- can be just  .insert(req.body);
    .returning(['title', 'completed', 'id', 'url', 'order'])
    .then( results => {
      res.json(outputId(results, req)[0]);
    });  
});

app.get('/:id', (req, res) => {
  knex
    .select('title', 'completed', 'id', 'url', 'order')
    .from('todo')
    .where({id: req.params.id})
    .then( results => {
      res.json(outputId(results, req)[0]);
    });  
});

app.patch('/:id', (req, res) => {
  knex('todo')
    .where({id: req.params.id})
    .update({title : req.body.title,
      completed: req.body.completed,
      order: req.body.order
    }) //<--- can be just  .update(req.body);
    .returning(['title', 'completed', 'id', 'url', 'order'])
    .then( results => {
      res.json(outputId(results, req)[0]);
    })
    .catch( err => {
     console.log(err)
      res.status(500).send('patch failure!')
    });
});

app.delete('/:id', (req, res) => {
  knex
    .from('todo')
    .where({id: req.params.id})
    .del()
    .then( results => {
      return res.status(204).send('blogpost delete success');
    });
});

app.delete('/', (req, res) => {
  knex('todo')
    .del()
    .then(result => {
      return res.status(204).send('delete success');
    });
});

app.listen(process.env.PORT || 8080);

exports.app = app;