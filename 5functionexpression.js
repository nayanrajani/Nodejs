//Normal Function -> 
function Sayhi(){
    console.log('hi');
}

Sayhi();

//Function expression->
var saybye = function(){  //declaring alongside
    console.log('bye');
};

saybye();

// Different Pattern
function callfunfunction(fun){
    fun();
}

callfunfunction(saybye);