//block scope

var a=10; //function scoped or global scope
if(true){
    var a=20;
}
console.log("var a=",a);

let b=10;
if(true){
    let b=20;
}
console.log("let b=",b);

