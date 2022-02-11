var fs = require('fs');

// //synchronous
fs.mkdirSync('stuff');  //create a directory

// //comment the above code
fs.rmdirSync('stuff');  //remove a directory

//Asynchronous
//comment the above code
// when we are using Asynchronous function we should add a callback function
// after this completed 
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8',function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data, function(err, result){
            if(err) console.log('error', err);
        });

    });
});

//comment the above code
fs.unlink('./stuff/writeMe.txt', function(err){
    fs.rmdir('stuff', function(err){
        if(err) console.log('error', err);
    });
});
