//Arithmetic operator -   +,-,*,/,%,++,--
var a=20, b= 20;
var c = a+b;
var d= a-b;
var e= a * b;
var f= a / b;
var g= a % b;
var h=a++;
var i=++a;
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);

// relation operators

// <,>,<=,>=,==,===,!=,!==
//resultd in true and false
a=10,b=20,c=30;
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
console.log(a!=b);//
console.log(a!==b);
a="20";
// comparision op:it compare the value
console.log(a==b);
// strict comparision :look  value as well as datatype
console.log(a===b);

// Logical operator

var result = "hello" && a != b;
console.log(result);
var result = "hello" && a == b;
console.log(result);
var result = "hello" || a != b;
console.log("logical OR:" + result);



var result = "hello" || a != b;
console.log("logical not:" + !result);


// Assignment operators
// =, +=,-=,/+,*=,%=

b=55;
console.log((a==b));//55
console.log((a+=b));//110



//Ternary Operator

result= (a!=b) ? "hi this is true" : "Hi this is false";
console.log(result);


