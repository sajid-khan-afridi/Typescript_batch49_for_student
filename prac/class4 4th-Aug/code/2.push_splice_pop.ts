// push, splice, pop, 

const arr4=["one","two"];

// arr4.push("three");
const lenghtArr4=arr4.push("three");// return length after the push i.e. 3
console.log("Array values =",arr4)
console.log("Array length =",lenghtArr4)

// arr4.splice(1,0,"2","3","4");
arr4.splice(1,2,"2","3","4");
console.log("After splice =",arr4)

// arr4.pop()
const returnPop=arr4.pop();// return the value which is "pop out"
console.log("return Pop =",returnPop)
console.log(arr4)