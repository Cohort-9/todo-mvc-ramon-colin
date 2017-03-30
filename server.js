var express = require('express');

var app = express();

app.use(function(req, res, next) {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "DELETE, POST, PUT, GET, PATCH, OPTIONS"
  });  
  next();
});


app.get('/', (req, res) => {
  res.json([])
});

app.post('/', (req, res) => {
  res.json({'title':'a todo'});
});

app.delete('/', (req, res) => {
  res.json({});
});

app.listen(process.env.PORT || 8080);

exports.app = app;
