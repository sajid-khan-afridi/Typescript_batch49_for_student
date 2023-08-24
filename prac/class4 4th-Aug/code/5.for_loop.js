"use strict";
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
for (var i = 0; i <= 4; i++) {
    if ("Islamabad" === cleanestCities[i]) {
        console.log("It's one of the cleanest cities");
        break;
    }
}
// how many for loop will run
//break statement is used to come out of the block of code. to stop the execution of a loop, switch statement,
console.log(i);
// function newFun(){
//   console.log(cleanestCities)
// }
// newFun();
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
var matchFound = "no";
for (var i = 0; i <= 4; i++) {
    if ("Islambad" === cleanestCities[i]) {
        matchFound = "yes";
        console.log("It's one of the cleanest cities");
    }
}
if (matchFound === "no") {
    console.log("It's not on the list");
}
//here you know about "var i=0" redeclaration of variable but do not assign new data type "matchFound". 
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
var numElements = cleanestCities.length;
var matchFoundnew = false;
for (var i = 0; i < numElements; i++) {
    if ("Islamabad" === cleanestCities[i]) {
        matchFoundnew = true;
        console.log("It's one of the cleanest cities");
        break;
    }
}
if (matchFoundnew === false) {
    console.log("It's not on the list");
}
// console.log(cleanestCities[0].length)
