// Create an array and print its contents

let stationry = ["pen", "pencil", "rubber", "sharpner"]; 
console.log(stationry);

//Add an element to an array 

 stationry.push("rular"); 
console.log(stationry);

// // Remove an element from an array

stationry.pop();
console.log(stationry);

// // Sort an array
stationry.sort();
 console.log(stationry);

// // loop through an array
// // Here I'm using foreach loop

stationry.forEach((value, index?, arry?)=>{
   console.log(index+" : " +value);
 });
