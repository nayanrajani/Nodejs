var http = require('http');
var fs = require('fs');
//var nodemailer = require('nodemailer');


//var mystream = fs.createReadStream(__dirname + '/readablestream.txt'); //'utf-8' if we use this then we will get the original text

var mystream = fs.createReadStream('C:/Users/nayan.rajani/Downloads/ok/my.txt'); //'utf-8' if we use this then we will get the original text

var Mywritestream = fs.createWriteStream(__dirname + '/writeablestream.txt')
// var Mywritestream = fs.createWriteStream('C:/Users/nayan.rajani/Development/MernTutorial/Nayan_Assignment/AWS-DynamoDB/cloudflarekey')

// we are reading data from one file and sending in chunks to the other file by creating that new file.
// with createstram method we can do this all thing
// in last function what we can do my write() method we can pass those chunks to the other file

mystream.on('data', function(chunk){
    console.log('New chunk received:');
    Mywritestream.write('[' + chunk + ']')
});
 


// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!',
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });