// in js function are first class citizens
//function ca be assigned to a varioable
//2.can be use as an argument
//3.can also be used as return statement


// callback:
// 1.Function  can be used as an Arguments
// 2.callback is a function that is executed after another function has finished 


var students = [
    {name:"Astha",subject:"java"},
    {name:"Avni",subject:"Python"},
    {name:"Anshika",subject:"ruby"},
];

function admitStudent(student,callback){
    setTimeout(()=>{
        students.push(student);
        console.log("student has been admitted");
        callback();
    },3000);
}
function displayStudent(){
    setTimeout(() => {
        var str="";
        students.forEach((student) => {
            str += student.name + " ";
        });
        console.log(str);
        console.log("student have been fetched");
        },3000);
}

var newStudent ={name:"Rahul",subject:"React"};
admitStudent(newStudent);
displayStudent();


