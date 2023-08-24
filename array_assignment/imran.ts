// Student Name : Imran Khan Batch 49 web and app dev

// Beginner tasks

//task 01
let arr = ["a", "b", "c", 3, 5, 6];
console.log(arr); // print all elements

// task 02
arr.push(7); // add new to end
arr.unshift("ok"); // add new to start

//task 03
arr.shift(); // remove first element

//task 04 sorting array
arr.sort((a, b) => b - a); // sort Z-A

//task 05 // loop over array
arr.map((item) => {
  console.log(item);
});

// Intermediate Tasks
// task 01
let checkIndex = arr.indexOf("a", 1);
console.log(checkIndex); // -1 because a isn't present after 1

let checkLastIndex = arr.lastIndexOf("b");
console.log(checkLastIndex); // 1 because b is at [1]

let sliceArray = arr.slice(0,3) 
console.log(sliceArray) // slice 0 -3 elements

// task 02 - reverse order function
let reverseOrderFunc = (arr) =>{
    return arr.reverse() }
console.log(reverseOrderFunc(arr)) // reversed order

// task 03 min-max
let arr2 = [1,2,4,66,77]
let minMax = (arr) => {
    let min = Math.max(...arr) // ... spread out
    let max = Math.min(...arr) // ... spread out
    let minMax = `Smallest: ${min} and Largest:${max}`
    return minMax }
console.log(minMax(arr2)) // Smallest: 77 and Largest:1

// task 04 find specific item in array.
let programmingArr = ['Java','Python','Go','Ruby','ML','Javascript']
let findSpecificItem = (arr,item) =>{
    let index = arr.indexOf(item)
   return (index != -1) ? `The ${item} is found at ${index}`: `${item} not found at array`
}
console.log(findSpecificItem(programmingArr,'Javascript')) // js found at 5