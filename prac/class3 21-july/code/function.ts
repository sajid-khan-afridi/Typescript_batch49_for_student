greet("Hoisted")
function greet(name:string){
    console.log("hello "+name.toUpperCase()+"!")
}
greet("Hassan");//invoking or calling function

function myFavoriteNumber():number{
    return 26;
}
let num1=myFavoriteNumber();
console.log(num1);

// function sum(para1:number,para2:number ){
// return para1+para2;
// }
// ()=>{return }

// console.log(sum1(10,20)); //can't hoisted 
let sum1=(x:number,y:number)=>{
    return x+y;
}
console.log(sum1(10,20));

let sum2=(x:number,y:number)=>x+y;
console.log(sum2(20,20))


// My name is Ali and I am 16 years old
// myFunc(myName,age)