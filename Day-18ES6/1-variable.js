//ES5 variable;
var a=10; //global scope as well local scope 
//ES6 variables:
//Block Scope
// let,const
{
    let c = 100;
    console.log(c);
}
//console.log(c);
const sessions =120;
console.log(sessions);
sessions++;
console.log(sessions);