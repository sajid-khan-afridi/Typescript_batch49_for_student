"use strict";
const arr5 = ["one", "two", "three"];
// arr5.shift();
let returnShift = arr5.shift();
console.log(arr5);
console.log("returnShift =", returnShift);
// arr5.unshift("1")
let returnLength = arr5.unshift("1");
console.log(arr5);
console.log("returnLength =", returnLength);
// slice
const arr6 = arr5.slice(1); //two three
//arr6=arr5.slice(1,2); //error because of constant
const arr7 = arr5.slice(1, 2); //two //starts from index 1 and ends to index 2
console.log(arr6);
console.log(arr7);
