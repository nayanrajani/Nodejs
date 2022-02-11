var express = require('express');

//controller path

var todoController = require('./controllers/todocontroller');

var app = express();

// set-up template engines

app.set('view engine', 'ejs');

// now our nodejs knows that we will use ejs for our project.

// static files
// we will remove the route because
// we don't want to make our route from a 
// go from specific route
app.use(express.static('./public'));

// fire controllers
// we are going to fire todoController function
todoController(app);

//listen to port

app.listen(3000);
console.log('You are know listening to the port 3000!!');