var http = require('http');
var fs = require('fs');


var mystream = fs.createReadStream(__dirname + '/readablestream.txt'); //'utf-8' if we use this then we will get the original text

// to read this above file, the read stream will send data
// in small chunks and we can see it one by one because of this method
// there is a event called data in createReadStream which allows us to listen when we receive any kind of data

mystream.on('data', function(chunk){
    console.log('New chunk received:');
    console.log(chunk);
});
 