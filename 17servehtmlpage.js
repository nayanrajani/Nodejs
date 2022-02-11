var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});  //header

    var mystream = fs.createReadStream(__dirname + '/17example.html'); //'utf-8' if we use this then we will get the original text
    mystream.pipe(res); //we are directly writing into the response to html page
});

server.listen(3000, '127.0.0.1'); //Port number and IP Address
console.log("Started listening to the port!!");
// run this code node filename
// then open this link
// link: http://127.0.0.1:3000/
