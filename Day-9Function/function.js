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
add(5,10);
var Add = function(){
    return a+b;
    
};


//js scope:visibility of code
// there are three types of scope
// Block scope
//function
//global

// 1.Block Scope:ESS there is np block,its available in ES6(let and const)

// var c=30; //global scope
// function Scope1() {
//  var a=10;
//  console.log("Inside scope1");
//  console.log(a);
//  console.log(c);


//  function Scope2(){
//     var a=20;
//  console.log("Inside scope2");//block scope
//  console.log(a);
//  console.log(c);
// }
// Scope2();
// }
// Scope1();

// console.log("outside scope1");
// console.log(a);
// console.log(c);



// function checkvar(){
//     //a variable that is create inside function without var is treated as Global variable and have global scope
//     data=20;  
//     console.log(data); 
// }
// checkvar();
// console.log(data);


// function add(a,b) {
//     return a+b;

// }
// var sum =add;//reference of add() is also stored in sum 
// //so we call the function using add() as well sum()
// console.log(sum(5,10));
// console.log(add(5,10));


//Passing function to a function
function avg(a,b,sum)
{
    return sum(a, b)/2;

}
function add(a,b){
    return a+b;

}
var sum =add;
var result=avg(5,10,sum);
console.log("FiNAL result="+result);


//function to create objects

function Person(){
    //properties
    // Person(this.name,this.age)
    this.name="Astha";
    this.age="21";

    //methods
    this.details=function(){
        return "Name= " + this.name + "Age: " + this.age;
    };
}
var obj1=new Person();


// console.log(obj1.name);
// obj1.name="Anshika";
console.log(obj1.details());
