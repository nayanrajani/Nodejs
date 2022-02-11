var express = require('express');

// downloaded the body parser

var bodyParser = require('body-parser');

// all the way express is getting a function.
// but we are getting all the functionality into app variable.

var app = express();

//body-parser thing 

var urlencodedparser = bodyParser.urlencoded({extended: false});

// you can also use this
//-> app.use(express.urlencoded({extended: true}));
//-> app.use(express.json()) // To parse the incoming requests with JSON payloads

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

app.get('/coontact', function(req, res){
    res.render('coontact', {qs: req.query});
});

app.post('/coontact', urlencodedparser, function(req, res){
    console.log(req.body);
    res.render('coontact-success', {data: req.body});
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