var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World, My Dear Kalin! This is for webhook test! Gerrit Test!\n');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
