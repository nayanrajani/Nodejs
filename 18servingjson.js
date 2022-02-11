var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});  //header

    var myobj = {
        name: 'Nayan',
        job: 'Associate',
        age: 23
    };

    res.end(JSON.stringify(myobj));  // we cannot write myobj here because .end method expect string or buffer.

});

server.listen(3000, '127.0.0.1'); //Port number and IP Address
console.log("Started listening to the port!!");