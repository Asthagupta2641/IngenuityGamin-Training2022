 export default function ImportantMsg(){
    console.log("this is a important information");
 }
 let message = "This is module concepts";

 let accountNo=1234434;//without using export makes it private
 let display = (name) =>{
    return`${name}, welcome to ingenuity gaming `;
};

 class Employee{
    constructor(name, id,designation){
        this.name=name;
        this.id=id;
        this.desgination=designation;
    }
    dispDetails(){
        console.log(`Employee Name:${this.name}\nEmployee Id: ${this.id}\nEmployee Designation: ${this.designation}`);
    }
}
export{message,display,Employee};
