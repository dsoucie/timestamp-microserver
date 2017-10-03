const express = require('express');
const processRequest = require('./processRequest');
const path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'public/views'));

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/:input', (request, response) => {
  var input = request.params.input;

  if (input != 'favicon.ico') {
    var responseObj = processRequest(input);
    response.json(responseObj);
  }
});

app.listen(8080);