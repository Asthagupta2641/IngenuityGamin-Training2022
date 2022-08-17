//setTimeout function
// setTimeout(callback,3000);
function callback(){
    console.log("HELLO FRIENDS");
}


setTimeout(()=>{
    console.log("hello hello");
},5000);


//setTimeInterval
var myInt=setInterval(callback,2000);
clearInterval(myInt);