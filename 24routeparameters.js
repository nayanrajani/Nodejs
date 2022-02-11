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

// app.get('/profile/:id', function(req, res){

//     res.send('You requested to see profile with id ' + req.params.id);
// });

app.get('/profile/:name', function(req, res){

    res.send('You requested to see profile with name ' + req.params.name);
});

app.listen(3000); //listening to a port or created a server

// http://localhost:3000/