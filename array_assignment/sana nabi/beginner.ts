// creat an array and print its content
let myArray = ["Ali", "Sahil", "Noman", "Usman", "Sulman", "Mashal"];
console.log("initial array:",myArray);      
//add an element
let  newElement : string ="Sad";  
myArray .push (newElement);
console.log("add an element:",newElement);                   
//remove an element
let removeElemant = myArray.slice(4,5);
console.log("remove an element:",removeElemant);                  
//sort an element
myArray.sort();
 console.log("sort an element:",myArray);
//for loop to get index in array
for (let i=0; i<  myArray.length; i++){
    console.log("for loop to get index in array:",myArray[i]);          
}
//for loop to get values in array
for (let i=0; i<myArray.length; i++){
    console.log("for loop to get value in array;",i);                     
}
 //for in loop to get index in array
for (let i in myArray){
    console.log("for in loop to get indexs in array:",(i))
                    
}
//for in loop to get values in array
for (let i in myArray){
    console.log ("for in loop to get values in array:",
    myArray[i]);         
}
//for of loop to get values in array
for (let i of myArray){
    console.log("for of loop to get values in array",i);                   
}
//for of loop to get index in array 
for (let i of myArray){
   console.log("for of loop to get index in arry:",myArray[i]);             
}
// next  exampel
// Create an array and print its contents
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Initial array:", fruits);

// Add an element to the array
fruits.push("pear");
console.log("Array after adding an element:", fruits);

// Remove an element from the array
let elementToRemove = "orange";
let indexToRemove = fruits.indexOf(elementToRemove);
if (indexToRemove !== -1) {
    fruits.splice(indexToRemove, 1);
}
console.log("Array after removing an element:", fruits);

// Sort the array
fruits.sort();
console.log("Array after sorting:", fruits);

// Loop through the array
console.log("Looping through the array:");
for (let fruit of fruits) {
    console.log(fruit);
}