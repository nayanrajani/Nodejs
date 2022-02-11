var fs = require('fs');

//read Synchronous
var result = fs.readFileSync('readMe.txt', 'utf-8'); 
console.log(result);

//Write Synchronous
fs.writeFileSync('writeMe.txt', result); 

// comment above part to run Asynchronous
// Read ASynchronous
fs.readFile('readMe.txt', 'utf-8', function(err, data){
    console.log(data);
});

console.log('test'); //this will run first then the read file

// delete the file writeMe.txt to run down part
// Write ASynchronous
fs.readFile('readMe.txt', 'utf-8', function(err, data){
    console.log(data);
});

var fs = require('fs');
 fs.readFile('readMe.txt', 'utf8', function (err, data) {
  fs.writeFile('writeMe.txt', data, function(err, result) {
     if(err) console.log('error', err);
   });
 });

 fs.unlink('writeMe.txt');