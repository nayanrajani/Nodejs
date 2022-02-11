var express = require('express');

// all the way express is getting a function.
// but we are getting all the functionality into app variable.

var app = express();

//set EJS as a view Engine

app.set('view engine', 'ejs');

//using a middleware see lesson 28
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/home', function(req, res){
    res.render('home');
});

app.get('/contact', function(req, res){
    res.render('contact');
});
app.get('/about', function(req, res){
    res.render('about');
});


// app.get('/profile/:id', function(req, res){

//     res.send('You requested to see profile with id ' + req.params.id);
// });

app.get('/profile/:name', function(req, res){
    var data = {
        age: 23,
        job: 'Associate',
        hobbies: ['Listening to Music', 'Travelling', 'Writing']
    };
    res.render('profile', {person:req.params.name, data:data}); 
});

app.listen(3000); //listening to a port or created a server

// http://localhost:3000/