var myArr=[1,4,5,6,67];
var newArr=myArr.forEach((i)=>i *10);
console.log(newArr);

var users=[
    {firstname:"Astha" ,lastname: "Gupta"},
    {firstname:"Astha" ,lastname: "Gupta"},
    {firstname:"Astha" ,lastname: "Gupta"},
    
];
var fullNmae =users.map((u)=>{
    return u.firstname +  " " +u.lastname;
});
console.log(fullNmae);

