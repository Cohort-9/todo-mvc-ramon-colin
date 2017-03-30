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
  res.json([]);
  // knex.select('title', 'completed', 'id', 'url')
  // .from('todos')
  // .then(results => {
  //   const output = results.map(todo => {
  //     todo.url = `${req.protocol}://${req.get('host')}/${todo.id}`
  //     return todo;
  //   });
  //   res.json(output)
});


app.post('/', (req, res) => {
  res.json({'title':'a todo'});
});

app.delete('/', (req, res) => {
  res.json({});
  // knex(toDo)
  //   .del()
  //   .then(result => {
  //     return res.status(202).send('delete success');
  //   })
});

// app.post('/', (req, res) => {
//   knex.select('title', 'completed', 'id', 'url')
//   .from('todos')
//   .then(results => res.json(results));
// });



app.listen(process.env.PORT || 8080);

exports.app = app;
