var http = require('http');
var fs = require('fs');

///////////////////
// comment downpart code to execute this part
var mystream = fs.createReadStream(__dirname + '/readablestream.txt'); //'utf-8' if we use this then we will get the original text

var Mywritestream = fs.createWriteStream(__dirname + '/writeablestream.txt')

mystream.pipe(Mywritestream);

// Delete writeablestream.txt file in your directory then run this file
// we are listening the data from my stream and piping it to the write stream.

//node filename
///////////////////


//now we will use the server to send file to another user
// comment above code to execute this downpart

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});  //header

    // copy and paste the above pipe part here and change it 
    var mystream = fs.createReadStream(__dirname + '/readablestream.txt'); //'utf-8' if we use this then we will get the original text

    //var Mywritestream = fs.createWriteStream(__dirname + '/writeablestream.txt')
    // we don't need this createWriteStream

    mystream.pipe(res); //we are directly writing into the response

    //res.end('Hey Github'); //end this response to send to the browser
});

server.listen(3000, '127.0.0.1'); //Port number and IP Address
console.log("Started listening to the port!!");
// run this code node filename
// then open this link
// link: http://127.0.0.1:3000/
