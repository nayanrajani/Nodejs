// Global Object Example

//SetTimeout
setTimeout(function(){
    console.log("5 seconds have passed so printing this!");
}, 5000); // works after 5 Seconds

// check in terminal


//SetInterval

var time = 0;
setInterval(function(){
    time+=2;    
    console.log(time + "seconds have passed");
}, 2000);

// check in terminal
// end process by ctrl + c

//Comment above part to run Clear Interval

// Clear interval
var time = 0;
var timer = setInterval(function(){
    time+=2;    
    console.log(time + "seconds have passed");
    if(time > 5){
        clearInterval(timer);
    }
}, 2000);

