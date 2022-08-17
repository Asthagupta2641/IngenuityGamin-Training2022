// Adv Function

// - Invoking a Function as a Method in Object
// - Function call()
// - Function apply()
// - Function bind()
// - Arrow Function 
// - map function
// - filter function
// - CallBack Function
// - Timing Functions



// var obj = {
//     firstname :"Astha",
//     lastname  :"Gupta",
//     //using function to create method of object
//     fullName:function(){
//         return this.firstname + "" + this.lastname;
//     },
// };
// console.log(obj.fullName());

// //2.Function call()-
// var person1 = {
//     firstname:"Sara",
//     lastname:"khan",
// }
// console.log(obj.fullName.call(person1));



var Person ={
    fullname:function(city,country)
    {
         return (this.firstname + "" + this.lastname+ " " + city + " "+country);

    },
};
var person1 = {
        firstname:"Sara",
        lastname:"khan",
    }
   console.log( Person.fullname.call(person1,"Mumbai","India"));



   //Apply method to reuse a method available in other object


   var person2={
    firstname:"anu",
    lastname:"goyal",
   };
   console.log( Person.fullname.apply(person2,["Delhi","India"]));

   
