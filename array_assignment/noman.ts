//Create an array and print its content

let animals = ["cat", "lizard", "dog", "lion"];

console.log(animals);

//Add an element to an array
animals.push("elephant");
animals.unshift("rat");
console.log(animals);

//Remove an Element from the array
animals.shift();
animals.pop()
console.log(animals);

//Sort an array
console.log(animals.sort());

//loop through an array
let hardware = ["mouse", "keyboard", "Laptop", "CPU"];

for (var i=0; i<hardware.length; i++) {

    console.log(hardware[i]);
}

//second method of for loop 
for (let a of hardware ) {
    console.log(a);
}

//Use array methods such as indexof()
console.log(hardware.indexOf("CPU"));

//, lastindexof(), if we have one name, 3 times then we search for last one index 
console.log(hardware.lastIndexOf("keyboard"));

//slice()
let halfHardware = hardware.slice(2);
console.log(halfHardware);

//Create a function that takes an array as input and returns a new array with elements in reverse order
let arrayReverse = [1,2,3,4,5];
function reverseArray(arrayReverse: number []):number [] {
    return arrayReverse.reverse();
} 
let output = reverseArray(arrayReverse)
console.log(output);

//Smallest and Largest
function findMinMax(arrayReverse: number []): [number, number] {
    let maxNum = Math.max(...arrayReverse);
    let minNum = Math.min(...arrayReverse);
    return [maxNum, minNum];
}

let [larg, small] = findMinMax(arrayReverse);
console.log(`the largest number is ${larg}`);
console.log(`the smallest number is ${small}`);

//create a function that if an array contains specific element
function checkNumber(arrayReverse: number[],num:number): boolean {
    return arrayReverse.includes(num);
}

let findNum = 3;
let result = checkNumber(arrayReverse,findNum);
console.log(`The number is exist or not${result}`);