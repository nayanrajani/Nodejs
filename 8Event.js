var events = require('events');

//element.on('click', function(){}); jquerry example

var myemitter = new events.EventEmitter();  //event emitter object stored here

myemitter.on('someEvent', function(msg){
    console.log(msg);
});

                //Arguments are passed down
myemitter.emit('someEvent', 'Nayan Emitted an event!!');
////////////////////////

var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var nayan = new Person('Nayan');
var palkesh = new Person('Palkesh');
var arun = new Person('Arun');

var people = [nayan, palkesh, arun];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg);
    });
});

arun.emit('speak', 'hey Broo!');