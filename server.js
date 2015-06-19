'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var getRandomWord = require('./lib/getRandomWord');
var postWord = require('./lib/postWord');

var Adjective = require('./lib/adjective');
var Noun = require('./lib/noun');
var Verb = require('./lib/verb');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var adjective = new Adjective();
var noun = new Noun();
var verb = new Verb();

app.post('/adjective', function(req, res) {
  res.json(postWord(req.body.word, 'adjective', adjective));
});

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.post('/verb', function(req, res) {
  res.json(postWord(req.body.word, 'verb', verb));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.post('/noun', function(req, res) {
  res.json(postWord(req.body.word, 'noun', noun));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.listen(port, function() {
  console.log('server started on port', port);
});
