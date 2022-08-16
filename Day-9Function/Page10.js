//write a program to return sum of all Arguments passed to a function.
//document.body.style.background="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(165,233,148,1) 100%)";
document.body.style.fontFamily="cursive";
document.body.style.fontSize="20px";
document.body.style.textAlign="center";
document.body.style.marginTop="150px";
document.body.style.textShadow="10px 10px 10px grey";
document.body.style.background= "#3EECAC";
document.body.style.backgroundImage=" linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)";
document.body.style.height="100vh";




document.write(`<h1> Assignment-10</h1>`);

var a = parseInt(prompt("Enter number1"));
var b = parseInt(prompt("Enter number2"));

function add(a,b) {
    
    return a+b;

}

document.write("sum of number " +add(a,b)+"<br>");


//2.Write a program to return more than one value from a Function

function Person(){
    //properties
    // Person(this.name,this.age)
    this.name="Astha";
    this.lastname="Gupta";

    //methods
    this.details=function(){
        return "Name= " + this.name + this.lastname;
    };
}
var obj1=new Person();
document.write("More thn one value" + obj1.details()+"<br>");


//3.write a code to return entire function definition and display it.

function Body(){

    function Body1(){
        tyfdthfhgdytf

    }

}
document.write(`${Body}`+"<br>");

//4.Write a Javascript program to create a new string adding "New!" in front of a given String.If the given 
//string begins with "New!" already then return the original string


var str="Hello";
if(str=="New!Hello"){
    document.write("New!Hello");
}
else {
    document.write("New!"+str);
}

//5.Write a JavaScript program to create a new string from a given string taking first 3 characters and the lastt
//3 characters and the last 3 characters of a string and add them together.The string length must be 3 or MutationRecord.If Notification,return the original string is returned.



var str1="Astha Gupta";
if(str1.length>3){
    document.write("<br>"+str1.slice(0,3)+str1.slice(8,11));
}
else{
    document.write(str1);
}