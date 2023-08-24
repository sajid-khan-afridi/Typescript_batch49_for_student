let arr=[23,20,13,2,4,12];
arr.sort((a,b)=>a-b);
// console.log(arr)

// For example, when comparing 23 and 20, the compare function will return 3, which is positive, so 23 will come after 20 in the sorted array.
// When comparing 4 and 12, the compare function will return -8, which is negative, so 4 will come before 12.

// for(let i in arr){
//     console.log(`${i} ${arr[i]}`)
// }



// indexOf(), lastIndexOf()
// console.log(arr.indexOf(4))//1
// console.log(arr.lastIndexOf(4))//1

// let word = "hello";
// console.log(word.indexOf("l", 4)); // -1
// console.log(word.lastIndexOf("l", 4)); // 3


//Create a function that takes an array as an input and returns a new array with the elements in reverse order.
const arrReverse=(arrInput:number[]):number[]=>arrInput.reverse();
console.log(arrReverse(arr));
//reverse() will reverse the array 



