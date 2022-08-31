// import { display, message} from "./library.js";
// import {Employee} from "./library.js";
import*as Data from "./library.js";
import ImportantMsg from "./library.js";

console.log(Data.message);
var name = prompt("Enter the name");
var data1=Data.display(name);
console.log(data1);


let emp1 =new  Data.Employee("astha", 1001,"Gaming Intern");
emp1.dispDetails();
ImportantMsg();