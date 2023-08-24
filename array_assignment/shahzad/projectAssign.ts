//Create an array and print its contents.
let stdName = ["Ali", "Kareem", "Jameel", "Ajmal", "Shahzad", "Noman", "Saleem"];
// let stdAge = [14, 25, 17, 25, 36, 24, 25];
console.log(stdName);
// console.log(stdAge);
// Add an element to an array.

stdName.unshift("Start element");
stdName.push("End Element");
console.log(stdName);
// Remove an element from an array.
stdName.pop();
stdName.shift();
console.log(stdName);

// Sort an array.

console.log(stdName.sort());

// Loop through an array.

let loopArray = ["Kareem", "Zahid", "Jamil", "Amjad", "Kamal", "Amjad", "Aamir"];
let i;
for (i = 0; i < loopArray.length; i++) {
    console.log(loopArray[i]);
}

// Second method

for (let item of loopArray) {
    console.log(`second ` + item);
}

// Third Method

loopArray.forEach(value => { console.log(`Third ` + value) })

// Intermediate 
// Use array methods such as indexOf(), lastIndexOf(), and slice().

console.log(`The Index is ` + loopArray.indexOf("Zahid"));
console.log(`The Last index of loop is ` + loopArray.lastIndexOf("Amjad"));
let newLoop = loopArray.slice(2);
console.log(newLoop);

// Create a function that takes an array as an input and returns a new
// array with the elements in reverse order.
let newReverseArray = [1, 2, 3, 4, 5, 6, 7, 8]
function reverseArray(newReverseArray: number[]): number[] {
    return newReverseArray.reverse();
}

let reversedArray = reverseArray(newReverseArray);
console.log(`Here is the reversed Array`);
console.log(reversedArray);

function findlarSmallElement(newReverseArray: number[]): [number, number] {
    let largest = Math.max(...newReverseArray);
    let smallest = Math.min(...newReverseArray);
    return [largest, smallest];
}

let [largest, smallest] = findlarSmallElement(newReverseArray);
console.log(`Largset = `, largest);
console.log(`Smallest = `, smallest);

// Create a function that checks if an array contains a specific element.

function checkElement<T>(newReverseArray: T[], element: T): boolean {
    return newReverseArray.includes(element);
}

let element = 8;
let result = checkElement(newReverseArray, element);
console.log(`In an array the value ${element} = ${result}`);
