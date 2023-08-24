// module.

let studentName="ali";
let age=30;
let pass=true;

let student1={
    studentName:"Ali",//properties
    age:30,
    pass:true,
    message(){console.log(`hello! ${studentName}`)},//methods
    greet:function(){console.log("hello")},//anonymous function
    greet2:()=>{console.log("hello")},

}

console.log(student1.age);
student1.message()
student1.greet()