var counter = function(arr){
    return 'There are ' + arr.length + ' elements in it.'
}

//main exporter
//module.exports = counter;

//console.log(counter(['nayan', 'palkesh', 'Arun']));

var adder = function(a,b){
    return `The sum of two number is ${a + b}`;
}

var pi = 3.142;

//other types of exporter

module.exports.adder = adder;

module.exports.pi = pi;

module.exports.counter = counter;

//easy way of exporter

module.exports.counter = function(arr){
    return 'There are ' + arr.length + ' elements in it.'
}

module.exports.adder = function(a,b){
    return `The sum of two number is ${a + b}`;
}

module.exports.pi = 3.142;

// one more way

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}