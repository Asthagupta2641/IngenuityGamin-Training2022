//js object :objects is non-primitive data type
//way-1 to create objects


var person = {
    name:"Astha",
    age: 25,
    city: { cityName: "Lucknow",pincode:226004},
    sector: [1,2,3,4,5],
    details: function(){
         return this.name + " "+this.city.cityName;
        },
};
console.log(person.name);
console.log(person.city.cityName);


var student = new Object();
student.name="Manish";
student.age=22;
student["city"] = "Mathura";

console.log(student);

person.email = "astha.gupta_cs19@gla.ac.in";
console.log(person);