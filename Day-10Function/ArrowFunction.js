//ES5 Based function
var add = function (a,b){
    return a+b;
};
console.log(add(5, 10));


//ES6 Fat Arrow Function(short syntax)
//variation-3
var add =(a,b)=> a+b;
console.log(add(5,15));



//Variation-1
var sayHello=()=>console.log("this is arrow function of variation-1");
sayHello();


//variation-2
var sqr=(a)=>console.log("result: " + a * a);
sqr(5);

var myArr=[1,3,5,7];
myArr.forEach((a)=>console.log(a*10));
