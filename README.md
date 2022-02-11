# Nodejs
1. Introduction 
    - Introduction
        - A platform which allows us to run JAVASCRIPT on a computer/server
        - Read, delete and update files
        - Easily communicate with a database
        - it is itself written in C++
        - it use javascript to use V8 which is also written in C++.
        - Node.js is an open source server environment
        - Node.js is free
        - Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
        - Node.js uses JavaScript on the server

    - Why Node.js?
       - Node.js uses asynchronous programming!
       - A common task for a web server can be to open a file on the server and return the content to the client.

            - Here is how PHP or ASP handles a file request:

                - Sends the task to the computer's file system.
                - Waits while the file system opens and reads the file.
                - Returns the content to the client.
                - Ready to handle the next request.

            - Here is how Node.js handles a file request:

                - Sends the task to the computer's file system.
                - Ready to handle the next request.
                - When the file system has opened and read the file, the server returns the content to the client.
                - Node.js eliminates the waiting, and simply continues with the next request.

        - Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.

    - What Can Node.js Do?
            - Node.js can generate dynamic page content
            - Node.js can create, open, read, write, delete, and close files on the server
            - Node.js can collect form data
            - Node.js can add, delete, modify data in your database

    - What is a Node.js File?
            - Node.js files contain tasks that will be executed on certain events
            - A typical event is someone trying to access a port on the server
            - Node.js files must be initiated on the server before having any effect
            - Node.js files have extension ".js"

    -Why Popular?
        - It uses Jvascript
        - veryfast(runs on the V8 Engine and uses non-blocking code)
        - Huge ecosystem of open source packages(npm)
        - Great for real-time services(like chat)
    - Content
        - The inner workings of Node.js
            - V8 engine
            - Modules
            - Event emitter
            - The file system
        - Creating a web server
            - Routing
            - Express
            - Templating
        - Make a Node.js application (todo app)
    - You should know this before continue
        - Javascript
        - HTML
        - A tiny bit about the command line

2. Installing Nodejs
    - Nodejs.org(Recommended for most user)
    - after installing go to Command prompt type-> node -v(to check)
    - download an extension(PlatformIO) in vscode or any other IDE and type in terminal node -v to check everything is Ok.
    - for intelligence-> 
        - go to path in vscode-> type 'npm init -y'
        - type 'npm install --save-dev @types/node' 
        - type 'npm install -g nodemon'
    - try to create a file named as app.js 
    - write-> 'console.log('Hey From Nayan!!');' <-and save it and run it in terminal by-> node [filename].js

3. The V8 Engine
    - Now we fully understand how nodejs works, now we will talk about some different components it is made from.
        - JavaScript Engines
            - Computers do not understand Javascript
            - A javascript engine takes javascript, and converts it into something it does understand-machinecode.
        - Nodejs is written in C++.
        - At the heart of Nodejs is the V8 Engine.
        - The V8 Engine converts our JS into Machine code.
    - So, when we create javascript in chorme or in the browser, then V8 is used at that point too, to translate it.
    - Nodejs with V8
        - Javascript -> {(c++) Nodejs (V8)} -> Machine Code
     
4. The Global Object
    - When we write javascript in a browser, the global object is a window object and we can access it the window object, to alert, set time etc.
    - when we write javascript to node then global object is no longer the window object, because we are not in the browser anymore.
    - we can use some methods that we can directly use to run the browser from inside of the nodejs.
    - there are various global object we can use.

5. Function Expression //this is used alot
    - Normal Function -> 
        function Sayhi(){
            console.log('hi');
        }

        Sayhi();
    
    - Function expression->
        var saybye = function(){  //declaring alongside
            console.log('bye');
        };

        saybye();

6. Modules & require()
    - Consider modules to be the same as JavaScript libraries.

    - A set of functions you want to include in your application.
    - we don't put our all of the code in the one file, we will not be able to manage.
    - So, the solution is, we should split our code into logical module for different code or for certain functionality.
    - we can call that module when ever we need them.
    - A module is just another javascript file.

    - we have used a counter, further on we will export that file to other file to see it is working or not?
    - check the example 

7. Module Pattern
    - this is for that when we are required to export verious things.
    - we will use a template string that is a backtick which is from ES6.(` `)
    - Module.exports is just a empty object.
    - so if we want to call a particualr file to another file we can use 'module.exports.filename=filename;'
    - there 4 ways to exports the data from one file to another 

8. The Event Module
    - this is a in-built module of nodejs.
    - we can require them in the same way then we require custom module
    - we just have to write the name of the particular module we don't have to pass any path.
    - we use this even emitter to create custom events to react to those custom events
    - Util Module-
        - this module allows us to do inherite certain things from objects build into nodejs

9. Reading and Writing files
    - this can do alot of things but we are just doing the reading and writing of the file.
    - create a file and write something to it
    - readFileSync is a method that will go and read the file synchronously.

    - fs.readFileSync('9example.txt', 'utf-8'); (Read)
    - fs.writeFileSync('writeMe.txt', result); (Write)
    - fs.unlink('filename'); (delete the file)
    - Commands->
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

10. Creating and removing directories
    - var fs = require('fs');
    - fs.mkdirSync('stuff');  //create a directory
    - fs.rmdirSync('stuff');  //remove a directory
    - Commands->
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
11. Clients & Servers
    - we see how to create the server.
    - Behind the server scene-
        - Client ->(Request)-> Server
        - Client <-(Response)<- Server
        - When ever we are accessing any website there are some protocols to access it and whatever we are accessing having a data somewhere in the server.
        - Protocols
            - A set of communication rules, that two sides agree to use when communicating
            - Each server and Computer can be identified by it's own ip address.
            - if a client wants to communicate to the server, first need to connect to this IP Address.
            - Socket is used as a channel to communicate between to computers.
            - protocols-> http, https, ftp, etc.
            - for HTTP-> the protocol will be used TCP, and the data sent in the form of packets.
            - Nodejs gives us this ability to access this functionality, to open the connection between two computers and send information between them.
            - we can tell node to respond on the particular request, of particular type.
        - Ports
            - A program running on a computer can listen for requests sent to a particular port number.
            - E.g-> 172.24.86.76:3000
            - If we send the request to the port number 3000, then it will be listening to this port and it will send a response to it.

12. Creating a Server
    - we will create a server to send request and respond to the server from browser.
    - we will use http module for that.
    - var http = require('http'); (using http module)
    - var server = http.createServer(); (created server)
    - var server = http.createServer(function(req, res){});
        - whenever we will request to the server the above function is called, and here we are using two parameters
        - here req (Request) is-> loaded with the details about the request has been made.
        - here res (Response) is-> something we give response back to the client.
    - Response Headers

            - Client-------->  (Request)--------->  Server
                    (Request + request headers)

            - Client<-------- (Response)<-------- Server
                (Response data + response headers)
        - Headers contains
            - Content-Type (html, json, plain text)
            - Status (404, 200, etc)
    - res.writeHead(200, {'Content-Type': 'text/plain'});  //header
    - res.end('Hey Github'); //end this response to send to the browser

    - server.listen(3000, '127.0.0.1'); //Port number and IP Address
    - console.log("Started listening to the port!!");
    - no run the command in terminal-> node filename
    - type this in URl-> http://127.0.0.1:3000/
    - go to inspect-> network to chek the status
    - console.log('request was made: ' + req.url); (To see the request of user)

13. Streams & Buffers
    - Buffer
        - Temporary storage for a chunk of data that is being transferred from one place to another.
        - The buffer is filled with data, then passed along
        - Transfer small chunks of data at a time.
                                 
                               (Buffer)        [ |  ]
        Data Passes on <----- [][][][][] <-[]--[Data]
                                               [ |  ]
                                               

    - Stream
                                                    
                                                (Buffer)     (Data)        
            Data Passes on and Processed <----- [][][][][] <-[]-[]-[]-[]-

            - It is the stream of data that flows overtime from one place to another.
        - Stream in Nodejs
            - Can create stream in nodejs to transfer data.
            - Increase performance.
        - Types of Streams
            - Writeable Streams
                - Allows nodejs to Send/write data to a stream.
            - Readable streams
                - Allow nodejs to read data from a stream.
            - Duplex
                - Can read and write to a stream.

14. Readable Streams
    - we will require fs module for this.
    - we need a method called 'create readstream' method 

        var mystream = fs.createReadStream();
        //to read this above file, the read stream will send data in small chunks and we can see it one by one because of this method
        //there is a event called data in createReadStream which allows us to listen when we receive any kind of data

        mystream.on('data', function(chunk){
            console.log('New chunk received:');
            console.log(chunk);
        });  

15. Writable Streams
    - here is the code and theory

        var http = require('http');
        var fs = require('fs');

        var mystream = fs.createReadStream(__dirname + '/readablestream.txt'); 

        //'utf-8' if we use this then we will get the original text

        var Mywritestream = fs.createWriteStream(__dirname + '/writeablestream.txt');

        // we are reading data from one file and sending in chunks to the other file by creating that new file.
        // with createstram method we can do this all thing
        // in last function what we can do my write() method we can pass those chunks to the other file

        mystream.on('data', function(chunk){
            console.log('New chunk received:');
            Mywritestream.write(chunk);
        });
        
16. Pipes
    - Take data from a read stream and pipe it to the Write stream.

    ![image](https://user-images.githubusercontent.com/89001655/132842143-6a202158-e731-4d8b-93a3-a2974957a909.png)

    - we need read and write stream both for this
    - but the change in method for calling, we will use pipe().
    
    var http = require('http');
    var fs = require('fs');


    var mystream = fs.createReadStream(__dirname + '/readablestream.txt'); //'utf-8' if we use this then we will get the original text

    var Mywritestream = fs.createWriteStream(__dirname + '/writeablestream.txt')

    mystream.pipe(Mywritestream);

    // Delete writeablestream.txt file in your directory then run this file
    // we are listening the data from my stream and piping it to the write stream.

    //node filename

    - now we will use the server that we made in lesson 12.
    - now we will use the server to send file to another user.
    - we read the file from streams, and write in the response to the server.

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

17. Serving HTML Pages
    - create a basic HTML Page for this lesson, where give a h1 and p tag and write in it(whatever you want)
    - give some style to it.
    - take an example of myhtml page.
    - we will copy the code from 16 and paste it here.
    - we will remove the unnecessary part and add other part too.
    - we will change the content type to 
        - res.writeHead(200, {'Content-Type': 'text/html'});  
    - and filename to
        - var mystream = fs.createReadStream(__dirname + '/17example.html');
    - check the code

18. Serving JSON
    - we are not using streams in this because we will directly serve JSON to the server.
    - copy the code from the http server creation lesson 12 and paste it here.
    - change content type to application/json
        - res.writeHead(200, {'Content-Type': 'application/json'});
    
    - now we will create an object to send
        var myobj = {
            name: 'Nayan',
            job: 'Associate',
            age: 23
        };
        
        // we cannot write myobj here because .end method expect string or buffer.
        // we will pass as a Json String
        res.end(JSON.stringify(myobj));  

    - run on server we can see our data is here.
    - go to check in inspect-> network-> localhost-> Headers, response, preview, etc.
    - check the code.

19. Basic Routing
    - In real world scenarios, we will use different url to distinguish data to different pages when requested.
    - whenever we make request to server, we are login this to the console, and we are accessing the property url called req(request), which is req.url.
    - create some html pages and use them to route in between with url.
    - check the code.

20. The Node Package Manager(npm)
    - Comes installed when we install Nodejs.
    - It is basically a bunch of command line to install 4rd Party packages inside our application
    - it is a huge ecosystem for 3rd party packages.
    - for example
        - express package helps us to routing, templating, and search efficiently.
    - we can load this package to run there functionality in our code.
    - with npm we can install, update and upload our own packages for other people to use as well.
    - https://www.npmjs.com/ link to the nom website for better understanding.

    - other language
        - What is npm?
            - The World's Largest Software Registry (Library) npm is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use npm to share software.Many organizations also use npm to manage private development.

        - Using npm is Free?
            - npm is free to use.

        - Software Package Manager
            - The name npm (Node Package Manager) stems from when npm first was created as a package manager for Node.js.
            - All npm packages are defined in files called package.json.
            - The content of package.json must be written in JSON.
            - At least two fields must be present in the definition file: name and version.
        
        - Managing Dependencies
            - npm can manage dependencies.
            - npm can (in one command line) install all the dependencies of a project.
            - Dependencies are also defined in package.json.

    - install express by this command
        - npm install --save express
        - it will create a folder called as node_modules, don't get shock by files inside this folder, those are just packages and dependencies.
    - uninstall express by this command
        - npm uninstall express

21. Package.json
    - To initialize a package manager
        - npm init -y

    - The package.json file is the heart of Node.js system. It is the manifest file of any Node.js project and contains the metadata of the project. The package.json file is the essential part to understand, learn and work with the Node.js. It is the first step to learn about developmnent in Node.js.

        - What does package.json file consist of?

            - The metadata information in package.json file can be categorized into below categories:
                - Identifying metadata properties: It basically consist of the properties to identify the module/project such as the name of the project, current version of the module, license, author of the project, description about the project etc.
                - Functional metadata properties: As the name suggests, it consists of the functional values/properties of the project/module such as the entry/starting point of the module, dependencies in project, scripts being used, repository links of Node project etc.

            - Creating a package.json file:

            - A package.json file can be created in two ways:
                - Using npm init : Running this command, system expects user to fill the vital information required as discussed above. It provides users with default values which are editable by the user.
            - Syntax:
                - npm init

            -  Writing directly to file : One can directly write into file with all the required information and can include it in the Node project.

            - Example: A demo package.json file with the required information.
                {
                    "name": "nodejs",
                    "version": "1.0.0",
                    "description": "1. Introduction \r     - A platform which allows us to run JAVASCRIPT on a computer/server\r     - Read, delete and update files\r     - Easily communicate with a database\r     - it is itself written in C++\r     - it use javascript to use V8 which is also written in C++.",
                    "main": "1intro.js",
                    "dependencies": {
                        "cors": "^2.8.5",
                        "express": "^4.17.1",
                        "node": "^16.6.1",
                        "q": "^1.5.1"
                    },
                    "devDependencies": {
                        "@types/node": "^16.9.0"
                    },
                    "scripts": {
                        "test": "echo \"Error: no test specified\" && exit 1"
                    },
                    "repository": {
                        "type": "git",
                        "url": "git+https://github.com/nayan-blazeclan/Nodejs.git"
                    },
                    "keywords": [],
                    "author": "",
                    "license": "ISC",
                    "bugs": {
                        "url": "https://github.com/nayan-blazeclan/Nodejs/issues"
                    },
                    "homepage": "https://github.com/nayan-blazeclan/Nodejs#readme"
                }

            - Explanation:
                - name: The name of the application/project.
                - version: The version of application. The version should follow semantic versioning rules.
                - description: The description about the application, purpose of the application, technology used like React, MongoDB, etc.
                - main: This is the entry/starting point of the app. It specifies the main file of the application that triggers when the application starts. Application can be started using npm start.
                - scripts: The scripts which needs to be included in the application to run properly.
                - engines: The versions of the node and npm used. These versions are specified in case the - application is deployed on cloud like heroku or google-cloud.
                - keywords: It specifies the array of strings that characterizes the application.
                - author: It consist of the information about the author like name, email and other author related information.
                - license: The license to which the application confirms are mentioned in this key-value pair.
                - dependencies: The third party package or modules installed using npm are specified in this segment.
                - devDependencies: The dependencies that are used only in the development part of the application are specified in this segment. These dependencies do not get rolled out when the application is in production stage.
                - repository: It contain the information about the type and url of the repository where the code of the application lives is mentioned here in this segment.
                - bugs: The url and email where the bugs in the application should be reported are mentioned in this segment.

22. Installing Nodemon
    - It basically monitor your application files, when you running the application in the browser and listening to the server and when we make any change in application, then it will restart the server automatically when we save the file.
    - So, we don't have to stop the server and start again and again.
    - after nodemon we only have to save the file and reload the browser for changes.

    - The nodemon Module is a module that develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. Nodemon does not require any change in the original code and method of development.

    - Advantages of Using nodemon Module:

        - It is easy to use and easy to get started.
        - It does not affect the original code and no instance require to call it.
        - It help to reduce the time of typing the default syntax node <file name> for execution again and again.

    - Installation: Install the module using the following command:
        - npm install -g nodemon
            - here -g is for global
            - we are installing globally

    - After installing the module you can check the current version of the module by typing on console as shown below:
        - nodemon version

    - Usage:

        - The nodemon wraps your application, so you can pass all the arguments you would normally pass to your app:
            - nodemon [your node app]

        - Options available for nodemon are shown below:
            - nodemon -h
        
        - Steps to run the program: Use the following command to run the file as shown below:
            - nodemon index.js
        
        - It automatically check the statements and the syntax of the program while writing new statements and show the result on the console.

23. Introduction to Express
    - Easy and flexible routing system.
    - Integrates with many templating engines.
    - Contains a middleware framework.

    - ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends. With ExpressJS, you need not worry about low level protocols, processes, etc.

    - What is Express?
        - Express provides a minimal interface to build our applications. It provides us the tools that are required to build our app. It is flexible as there are numerous modules available on npm, which can be directly plugged into Express.

        - Express was developed by TJ Holowaychuk and is maintained by the Node.js foundation and numerous open source contributors.

    - Why Express?
        - Unlike its competitors like Rails and Django, which have an opinionated way of building applications, Express has no "best way" to do something. It is very flexible and pluggable.

    - Pug
        - Pug (earlier known as Jade) is a terse language for writing HTML templates. It −

    - Produces HTML
        - Supports dynamic code
        - Supports reusability (DRY)
        - It is one of the most popular template language used with Express.     

    - HTTP Methods
        - GET
        - POST
        - DELETE
        - PUT   
    - But by using express we can respond to this request very easily. 

    - Responding to Methods
        - GET -> app.get('route', function)
        - POST -> app.post('route', function)
        - DELETE -> app.delete('route', function)

24. Route Parameters
    - It has make our work more easier to route between different pages.
    - now we can display the different parameters of user from the url to the browser page.
    - we have to provide the route like this
        - app.get('/profile/:id', function(req, res){});
        - app.get('/profile/:name', function(req, res){});
    - by using
        - req.params.[parameter]
        - id, name, age, etc.
        - app.get('/profile/:name', function(req, res){
            res.send('You requested to see profile with name ' + req.params.name);
        });

25. Templating Engines
    - with template engines we can embed data and javascript code into HTML file, then we can inject it to the browser.
    
    - Now what if we want to send an HTML page rather then string!
    - We can use sendFile method while sending an respond to the browser.
    - For example
        - app.get('/', function(req, res){
            res.sendFile(__dirname + '/home.html');
        });

    - we will use EJS (Embeded Javascript Template)
    - we have to install EJS 
        - npm install --save ejs
        - see in package.json file, ejs is installed
    - First thing we have to do that, we have to tell express that we want to use EJS as a view engine.
        - app.set('view engine', 'ejs');
        - By default when we request some views or templates, it's gonna log /views folder
        - Now we have to create a folder name views(ignore if already created), then we need to create a new file, as [filename].ejs
        - this filename tells the express that it is a EJS template.
    - now we can embed Javascript into the html page.
    - so, just copy the html page we created 17example.html and paste it to profile.ejs and save it.
    - now how do we render the profile.ejs file to view the template when user visit a particular route.
        - example-> /profile/:name
        - we will not use senfile for ejs
        - instead of this sendfile we are going to use render.
        - we are just going to pass the filename we don't have to provide the full path because we have already declared that earlier.
        - example->
            app.get('/profile/:name', function(req, res){
                res.render('profile'); 
            });
            - run it on server to check
        - now change in .js file 
            - app.get('/profile/:name', function(req, res){
                res.render('profile', {person:req.params.name}); 
            });
        - now let's do some dynamic changes in profile.ejs
            - <h2>Welcome to the web page of <%= person %></h2>
            - person property we are using and passing the parameter to it in .js file

        - we can create an object and view it on the browser
            - app.get('/profile/:name', function(req, res){
                var data = {   //object
                    age: 23,
                    job: 'Associate'
                }
                res.render('profile', {person:req.params.name, data:data}); 
            });
        - calling it on ejs file
            - <p><strong>Age: </strong><%= data.age %></p>
            - <p><strong>Job: </strong><%= data.job %></p>
    - Now we know how to inject data, and server that in views.
26. Templating Engines (Part-2)
    - Now in this, we will add more data in ejs file and render the file.
    - app.get('/profile/:name', function(req, res){
            var data = {
                age: 23,
                job: 'Associate',
                hobbies: ['Listening to Music', 'Travelling', 'Writing']
            };
            res.render('profile', {person:req.params.name, data:data}); 
        });
    - now we will pass an array of data to the ejs file, we need to change->
        - <body>
            <h1>Let's start creating this webpage</h1>
            <h2>Welcome to the web page of <%= person %></h2>
            <p><strong>Age: </strong><%= data.age %></p>
            <p><strong>Job: </strong><%= data.job %></p>
            <h3>Hobbies</h3>
            <ul>
                <% data.hobbies.forEach(function(item){ %>
                    <li>
                        <%= item %>
                    </li>
                <% }); %>
            </ul>
        </body>

27. Partial templates/views
    - Imagine we have seceral views like profile, data, transactions etc.
    - we can include partial template for the navigation part to navigate between the pages.
        - first of all we don't have to code again and again
        - we don't have to change each view, we will partially arrange it in each page and it will change it dynamically.
    - we need to create a partial folder inside views folder.
    - and create a file named as nav.ejs (put this code inside it)
        - <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About</a></li>
            </ul>
        </nav>

        - then add this in profile.ejs after the body tag and before (any) tag
            - <%- include ("partial/nav.ejs") %>
    - to try this you can create some files in views like profile.ejs and copy and paste the code of profile.ejs. 
    - try to add link in nav.ejs and it will change in all the file.
    - check the code.

28. Serving Static Files(& Middlewares)
    - Try to add CSS Externaly, because it is the best way to add CSS.
    - add a folder named Assets, then create a styles.css file and copy and paste your style code inside it.

    - this thing will not work ->
        - adding this link may work in other time but in node js we need middlewares.
        - <link rel="stylesheet" href="/Nodejs/assets/styles.css">
    - to overcome this situation we will use Middlewares.

    - Middlewares
        -  Middlewares are essentially the code that runs between request and response.
        - we will use some custom middlewares and some other express middlewares thoose static files like stylesheet, images links etc.
        - so we don't have to go through write code for each middleware or file we need.  
        - app is the name of express app, use to use the middleware on, '/assets' is the folder name, express.static, this is a static file we will be using in every ejs file.
        - example
            - app.use('/assets', express.static('assets'));
            - now add this link in every page(this will work)
                - <link rel="stylesheet" href="/assets/styles.css">

29. Query Strings
    - It is just an additional data adding on to the HTTP request in the form of name value pairs.
    - If often see this on url part, when we change pages on site, or take an example of pagination.
    - Example
        - mysite.com/blog/news/?page=2
        - page=2
        - mysite.com/contact?person=nayan&dept=Cloudlytics
        - Parse the request, and pull out the data
    - well when we use nodejs, express the request object do all of this parsing for us so it is easy to access this data.          
    - accessing the data via query
        - req.query
            - it will provide us all the data inside the query string.
        - In 29query.js file
            - app.get('/contact', function(req, res){
                res.render('contact', {qs: req.query});
            });
        - In contact.ejs
            - <h4><%= qs.person %> Works in <%= qs.dept %> Department</h4>  
        - In URL
            - http://127.0.0.1:3000/contact?person=nayan&dept=Cloudlytics   

    - Now we will create a form to prepopulate(pre-filled from URL) the details present in url.
    - create a new file of (anyname).ejs.
    - check the code of contact.ejs after h4 tag.  
        - <h4><%= qs.person %> Works in <%= qs.dept %> Department</h4>
    - this is how it will look
    
        ![image](https://user-images.githubusercontent.com/89001655/132950316-39f97f84-572c-4c47-982c-421cbfabc604.png)

30. Post Request
    - Post is a request method
    - Post request, ask the server to accept/store data which is enclosed in the body of the request.
    - often used when submitting forms. 
    - in the last lesson see the method to create and pre load the data from URL, but in this we will se how to make a submit button work to store that data.
    - copy and paste the old file in a new one
    - ad line in form field
        - <form id="contact-form" method="POST" action="/coontact">
    - we need to handle the post request in 30postmethod.js
        - for that we need middleware to parse data.
        - we will install body-parser for this.
        - Body parser will work as a middleware, when we try to POST some data then body parser will generate the body for that data.
        - install it then add it in our js file as require.
        - then add this
            - var urlencodedparser = bodyParser.urlencoded({extended: false});
            - this is a body parser, where an url encoder will create a body to POST.
            - we just need this-> urlencodedparser <- to store our data in this and call it to the POST.
            - write this Post method to call
                - app.post('/coontact', urlencodedparser, function(req, res){
                    console.log(req.body);
                    res.render('coontact', {qs: req.query});
                });
            - then run this in browser
                - http://127.0.0.1:3000/coontact
                - look like-

                    ![image](https://user-images.githubusercontent.com/89001655/132961086-7635c431-a660-4500-8e6d-7189301b5b62.png)
                
                - gives this output in console/cmd

                    ![image](https://user-images.githubusercontent.com/89001655/132961113-4d5eb637-d47d-4a92-818a-c3173fa49ef0.png)

            - Now let's send the user to success page after submitting.
                - what we will do
                - changing this 
                    - res.render('coontact', {qs: req.query});   
                - to this
                    - res.render('coontact-success', {data: req.body});
                - let's create a view for 'coontact-success' with .ejs 
                - check the code 
    - that's all!!

31. ToDoApp(Part-1) 
    - create a folder with the application name.
    - create a package.json file with
        - npm init -y
    - add some dependencies to it by
        - npm install --save-dev @types/node
        - npm install --save express
        - npm install --save ejs
        - npm install --save body-parser

32. ToDoApp(Part-2) 
    - try to see and understand the code in assets.
    - load one image assets
    - create one file app.js in todoapp directory.
        - Inside that file
            - var express = require('express');

              var app = express();

              // set-up template engines

              app.set('view engine', 'ejs');

              // now our nodejs knows that we will use ejs for our project.

              // static files
              // we will remove the route because
              // we don't want to make our route from a 
              // go from specific route
              app.use(express.static('./public'));

              //listen to port

              app.listen(3000);
              console.log('You are know listening to the port 3000!!');
        - We are going to use MVC type management of files
            - MVC (Model View Controller)
                - Model Contains
                    - Data like
                        - Todo's
                        - Users
                - View Contains
                    - Template Files(EJS) like
                        - todo.ejs
                        - account.ejs
                - Controllers (Controls the App) Contains
                    - Sections
                        - todoController
                        - userController

            - Here is the image

                ![image](https://user-images.githubusercontent.com/89001655/132962462-1eea597f-e38f-4cb2-abae-f67772058272.png)

    - we are going to use controller for the app
        - let's create another folder for the controller.
        - this will control the behaviour of our todo list.
            - manipulate the data
            - routing and etc
        - inside the todocontroller.js
            - module.exports = function(app){}; 
            - we are passing a function as a export in which we are passing the parameter of app(whole app)    
        - we need to pass the controller path in the app.js 
            - var todoController = require('./controllers/todocontroller');
    - to fire the controllers
        - // fire controllers
        - // we are going to fire todoController function
        - todoController(app); //passing the app parameter

    - Now in todocontroller
    
            module.exports = function(app){
                // now we are able to use the app parameter
                app.get('/todo', function(req, res){

                });

                app.post('/todo', function(req, res){

                });

                app.delete('/todo', function(req, res){

                });

            };

33. ToDoApp(Part-3) 
    - we are going to create a view for our App.
    - we are going to focus on app.get method in controller, whenever user request to '/todo' then it should render the page.
    - create a folder name 'views' in ToDoApp folder.
    - create a file inside that todo.ejs
    - using HTML 5, change title to ToDo App
    - Add script and css link
        - we are using jquery later on for ajax request in this app, we can go and search for CDN request for the same.
            - just add script now from this site
                - https://code.jquery.com/
                - query
                    
                    <script
                        src="https://code.jquery.com/jquery-3.6.0.min.js"
                        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                        crossorigin="anonymous">
                    </script>
        - now link the CSS file to it
            - <link rel="stylesheet" href="/assets/styles.css" type="text/css" >
            - this will work because we have make middleware static for './public' folder in app.js
                - app.use(express.static('./public'));
    - Inside the body tag
        - create a <div> tag and add id="todo-table"
        - we need a form to add a new item to the TODO list
        - add form tag
            
            <form >
                <input type="text" name="item" placeholder="Add new item.." required/>
                <button type="submit">Add</button>
            </form>
        - now we need a unordered list and list item inside the div and after the form tag
            
            <ul>
                <li>
                    Item 1
                </li>
                <li>
                    Item 2
                </li>
                <li>
                    Item 3
                </li>
                <li>
                    Item 4
                </li>
            </ul>
    - full code of body
        
        <body>

            <center>
                <h1>My Todo App</h1>
                <h3>ToDo List</h3>
            </center>

    
            <div id="todo-table">
                <form action="">
                    <input type="text" name="item" placeholder="Add new item.." required/>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    <li>
                        Item 1
                    </li>
                    <li>
                        Item 2
                    </li>
                    <li>
                        Item 3
                    </li>
                    <li>
                        Item 4
                    </li>
                </ul>
            </div>
        </body>

    - let's go to controller for rendering process in app.get

            app.get('/todo', function(req, res){
                res.render('todo');
            });
        
        - this is how it look like

            ![image](https://user-images.githubusercontent.com/89001655/132985220-cca2ff39-9c67-4d96-976e-437c506192e9.png)


34. ToDoApp(Part-4)
    - now we will create some todo data in todocontroller file.
        
        var data = [{item: 'Get Milk'},{item: 'Drink juice'},{item: 'Make lunch'},{item: 'Friend birthday'},{item: 'Learn MERN'},]


    - and pass it to the view, to show on screen.
    - we know that how to do that, via second object to pass 
        
        app.get('/todo', function(req, res){
            res.render('todo', {todos: data });
        });
        
        - now the array of data will pass to the todos property, by single item    
        - let's go to todo.ejs to output it dynamically in <li>(list item)

            <ul>
                <% for(var i=0; i < todos.length; i++){ %>
                    <li>
                    
                    </li>
                <% } %>
            </ul> 

        - Now we got our view, which is gonna dynamically inject our todo data

            <ul>
                <% for(var i=0; i < todos.length; i++){ %>
                    <li>
                        <%= todos[i].item %>
                    </li>
                <% } %>
            </ul>
    - save all and run this with 
        - nodemon app.js
        - see in the browser we get our data.
    - now let's add delete functionality with ajax.
        - we have added the functionality in /public/assets/todo-lists.js.
        - try to understand that file because we have already cover those things
    - we need a body-parser for the same in todocontroller.js
        - we are parsing the data in the form ob object.
        - just add require bodyparser in that.
        - and add request handler
            
            var bodyParser = require('body-parser');

            var urlencodedParser = bodyParser.urlencoded({extended:false});
        
        - will use urlencodedParser as a request handler in POST controller

                app.post('/todo', urlencodedParser, function(req, res){});

            - now parse the body inside this POST
        - next is delete
    - check the code

35. NoSQL & MongoDB
    - NOSQL Databases
        - Alternative to SQL Database
        - Store Documents(JSON) in a db, instead of tables of tables with rows and columns.
        - Works really well with Javascript (and therefore Node.JS)
        - we can use the MongoDb dabase which is on the cloud 
            - https://mlab.com
            - signup for free
            - create a database
            - we can perform CRUD Operations with this
            - we can use npm command to download the package of mongoose
        