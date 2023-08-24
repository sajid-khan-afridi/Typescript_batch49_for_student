"use strict";
// module.
let studentName = "ali";
let age = 30;
let pass = true;
let student1 = {
    studentName: "Ali",
    age: 30,
    pass: true,
    message() { console.log(`hello! ${studentName}`); },
    greet: function () { console.log("hello"); },
    greet2: () => { console.log("hello"); },
};
console.log(student1.age);
student1.message();
student1.greet();
