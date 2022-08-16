//function parts
//1.function definition
//2.function calling
//3.function arguments(optional)
//4.return value(optional)


// function versions
// 1.function without arguments and without return

function myFunction1(){
    //function definition
    console.log("this is function");
    console.log("it will perforn some tasks");
}  

myFunction1();

//2.function with argument and withour return

function myFunction2(a, b){
    console.log("function with data");
    console.log("Result="+(a+b));
}
myFunction1(5,10);

//3.function with argu with return
function myFunction3(a,b){
    return a,b;
}
var result=myFunction3(10,20);
console.log("result="+result);
console.log(myFunction3(30,25));


function sayHi(message) {
    // if(message) return message;
    // else return "no data received";

    // undefined(!message) return;
    // else result message;


}
console.log(sayHi("Hello"));
console.log(sayHi());


function add(a,b=0) {
    return a+b;

}
console.log("sum of number" +add(5,23));
console.log("sum of number" +add(5));

function sum(){
    console.log(arguments.length);
    sum(1,2,3,4);
    sum(1,2,3,4,5,6,7,8);
    sum(1,2,3,4,5,6,7,8,9,10);

    
}
//parametere rule
// a.js function definition do not specify data type for parameter
// b.do not perform type checking on the passed arguments
//c.do not checked on the no. of arguments received 

// we can also create function using constructor

var myFunction4 = new Function("a","b","return a+b");
// function myFunction3(a,b){
//     return a,b;
// }
console.log("function using constructor:" + myFunction4(2,7));

// In JavaScript, the purpose of Function constructor is to create a new Function object. 
//It executes the code globally. However,  if we call the constructor directly, a function is created dynamically but in an unsecured way.


//Function expression: it means storing function definition insiade a variBLE IS CALLED function expression.iT
// is known as anonymous function.
// var a=10;

var a=function(){
    console.log("this is function Expression");
    return "Hello friends";
}
console.log(a());


//  Self-Invoking Function

(function(){
    console.log("this is an anonymous function and its get caleed itself");
})();


//function Hoisting

 sayHello(5,10);
function sayHello(a,b){
console.log("Result = " + a + b);
}
Add(5,10);
var Add = function(){
    return a+b;
    
};