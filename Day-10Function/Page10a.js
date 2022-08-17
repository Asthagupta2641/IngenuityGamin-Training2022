document.body.style.fontFamily="cursive";
document.body.style.fontSize="20px";
document.body.style.textAlign="center";
document.body.style.marginTop="150px";
document.body.style.textShadow="10px 10px 10px grey";
document.body.style.background= "#3EECAC";
document.body.style.backgroundImage=" linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)";
document.body.style.height="100vh";




document.write(`<h1> Assignment-10a</h1>`);
document.write(`<h4>1.Write a Program to use call() and apply()Method</h4>`)
var Person ={
    fullname:function(city,country)
    {
         return (this.firstname + "" + this.lastname+ " " + city + " "+country+"<br>");

    },
};
var person1 = {
        firstname:"Astha",
        lastname:"Gupta",
    }
    document.write( Person.fullname.call(person1,"Mumbai","India"));



   //Apply method to reuse a method available in other object


   var person2={
    firstname:"anu",
    lastname:"goyal",
   };
   document.write( Person.fullname.apply(person2,["Delhi","India"]));

   

   document.write(`<h4>2.Write a Program to create an array having cube root of every element of another array</h4>`)
   
   var myArr=[8,27,64,125,216];
   var newArr=[myArr.map((i)=>Math.cbrt(i))];
   document.write("["+newArr+"]");

   document.write(`<h4>3.Write a Program to call a function in an interval of 3 sec for 5 times</h4>`)

       
//    document.write(`<h4>4.Write a Program to iterate an Array of Objects using map function</h4>`)
   var people=[
    {name:"Ashish" ,age: 23},
    {name:"Ajay" ,age:21},
    {name:"Arvind" ,age:26},
    {name:"Mahesh" ,age:28},
    {name:"Jay" ,age:19},
    
   ];
    var fullname =people.map((u)=>{
    return u.name +  " " +u.age;
   });
   document.write(fullname);

   document.write(`<h4>5.Write a Program to Filter out people whose age is less than 25 in descending order.</h4>`)


   var ages=people.map((i)=>{return i.age});
   var result=ages.filter(filterAge).sort(function(n1,n2){return n2.age-n1.age});
   document.write(result);
   function filterAge(age){
       return age<25
   }

     