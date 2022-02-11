var express = require('express');

// all the way express is getting a function.
// but we are getting all the functionality into app variable.

var app = express();

app.get('/', function(req, res){
    res.send('This is my home page!!');
});

app.get('/contact', function(req, res){
    res.send('This is my contact page!!');
});

app.listen(3000); //listening to a port or created a server

// http://localhost:3000/