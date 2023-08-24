//var is global and functional scope
console.log(greet); //hoisted
var greet="hi";

function myfunction(){
    var hello="hello";
}
//console.log(hello); //functional scope // this will give the error
console.log(greet); //global scope

var greet="say hello instead";// var can be redeclared

// why the let and const created
var greeter="hi"
if(true){
  var greeter="Say hello instead"; //try for let then line18  will give error
}
console.log(greeter); //output: "Say hello instead" because var is global scope



//--const 
const greeting="hi";
// greeting="say hello again"; assignment error


// it may be confusing
const greetings={
    message:"say hi",
    times:4
}
greetings.message="say hello instead";