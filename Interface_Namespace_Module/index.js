var StudentNs;
(function (StudentNs) {
    class Student {
        constructor(fullname, passport) {
            this.fullname = fullname;
            this.passport = passport;
        }
        dispDetails() {
            console.log(`Name: ${this.fullname} | Passport: ${this.passport}`);
        }
    }
    StudentNs.Student = Student;
})(StudentNs || (StudentNs = {}));
var TeacherNs;
(function (TeacherNs) {
    class Teacher {
        constructor(fn, sub) {
            this.fn = fn;
            this.sub = sub;
            this.fullname = fn;
            this.subjects = sub;
        }
    }
    TeacherNs.Teacher = Teacher;
})(TeacherNs || (TeacherNs = {}));
///<reference path ="student.ts"/>
///<reference path ="teacher.ts"/>
let stu1 = new StudentNs.Student("Rahul Kumar", 234343);
stu1.dispDetails();
let t1 = new TeacherNs.Teacher("ASDF", ["react", "java", "node", 'js']);
console.log(`Teacher name: ${t1.fullname} | Subject Teach: ${t1.subjects}`);
