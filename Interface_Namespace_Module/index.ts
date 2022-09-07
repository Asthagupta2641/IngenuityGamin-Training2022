  ///<reference path ="student.ts"/>
    ///<reference path ="teacher.ts"/>
 let stu1:StudentNs.studentInt = new StudentNs.Student("Rahul Kumar",234343);
 stu1.dispDetails();


 
 let t1 = new TeacherNs.Teacher("ASDF",["react","java","node",'js'])
console.log(`Teacher name: ${t1.fullname} | Subject Teach: ${t1.subjects}`); 