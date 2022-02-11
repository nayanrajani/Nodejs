const fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/17example.html').pipe(res);
    }
    else if(req.url === '/home' ){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/views/home.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/views/contact.html').pipe(res);
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/views/about.html').pipe(res);
    }
    else if(req.url === '/api/walker'){
        var walker = [
            {
                name: 'nayan', 
                age: 23
            },
            {
                name: 'rajani',
                age: 23
            }
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(walker));
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/views/404.html').pipe(res);
    }
});   


server.listen(3000, '127.0.0.1'); //Port number and IP Address
console.log("Started listening to the port!!");