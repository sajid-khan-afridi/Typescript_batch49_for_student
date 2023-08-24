"use strict";
// Write a program that finds the largest and smallest elements in an array.
const arr2 = [20, 32, 1, 45, 2];
arr2.sort((a, b) => a - b);
console.log(arr2);
let arrLength = arr2.length;
console.log(`Smallest element in array is = ${arr2[0]}`);
console.log(`Smallest element in array is = ${arr2[arrLength - 1]}`);
// Create a function that checks if an array contains a specific element.
console.log(arr2.includes(22)); //true
const checkElement = (element) => arr2.includes(element);
console.log(checkElement(45));
const item = 22;
const condition = checkElement(item);
if (condition) {
    console.log(`${item} is contained in array`);
}
else {
    console.log(`${item} is not contained in array`);
}
