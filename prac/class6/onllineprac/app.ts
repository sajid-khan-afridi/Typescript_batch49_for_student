import isEven from "is-even";

console.log(isEven(3));


let student1={
    stuName1:"Ali",
    stuAddress:"Peshawar",
    age:28,
    pass:true,
    hobbies:["game","watch news"],
    func:function(){
        console.log("Hello")
    },
    sum(){
        console.log("hello")
    },
    sum2:()=>{
        console.log("sum")
    }

}
// console.log(student1.hobbies)
// student1.func();

student1.sum();