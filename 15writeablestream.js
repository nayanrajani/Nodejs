var http = require('http');
var fs = require('fs');


var mystream = fs.createReadStream(__dirname + '/readablestream.txt'); //'utf-8' if we use this then we will get the original text

var Mywritestream = fs.createWriteStream(__dirname + '/writeablestream.txt')
// we are reading data from one file and sending in chunks to the other file by creating that new file.
// with createstram method we can do this all thing
// in last function what we can do my write() method we can pass those chunks to the other file

mystream.on('data', function(chunk){
    console.log('New chunk received:');
    Mywritestream.write(chunk)
});
 