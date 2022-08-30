let name= "Astha"
let designation ="Trainer"
let city = "Lucknow"
let distance = 834;



let disp = ()=>{
    console.log("this is a function");
};
//resturturing data object
let obj = {name,designation,city,distance,disp} ; 
console.log(obj);
obj.disp();
console.log(obj.name);