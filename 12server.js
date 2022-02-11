var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});  //header
    res.end('Hey Github'); //end this response to send to the browser
});

server.listen(3000, '127.0.0.1'); //Port number and IP Address
console.log("Started listening to the port!!");