'use strict';

// Backend is written in es5 to accomodate older versions of Node
var express = require('express');
var request = require('superagent');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, function() {
  console.log('Server started on port ' + PORT);
});
