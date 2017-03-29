var express = require('express');

var app = express();

app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  });  
  next();
});


app.get('/', (req, res) => {
  res.json({})
});


app.listen(process.env.PORT || 8080);

exports.app = app;
