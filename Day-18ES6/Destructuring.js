var arr=[1,2,3,4,5,6,7,8,9];



//destructuring with object
let person = {
    name:"sachin",
    age:30,
    mobile:7847394749,
    email:"dhbj@gmail.com",
    city:"delhi",
}
//destructure
let{mobile,email,city} = person;
console.log(mobile);
console.log(email);
console.log(city);
//actual object will not change
