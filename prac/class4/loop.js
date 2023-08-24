"use strict";
// while 
// do while 
// for 
// expression: operator operand
// 5+10
// for(exp1;exp2;exp3){
//     console.log("hello")
// }
// i is loop control variable
// for(let i=1; i<3; i++){
//     console.log(i); //three times
// }
// for(once; condition;i=i+1)
// 1.condition 
// 2.body of loop
// 3. increment
// i=3
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// for (var i = 0; i <= 4; i++) {
//   if ("Islamabad" === cleanestCities[i]) {
//     console.log("It's one of the cleanest cities");
//     // break;
//   }
// }
// console.log(i)
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// var matchFound = "no";
// for (var i = 0; i <= 4; i++){
// if ("Islambad" === cleanestCities[i]) {
//   matchFound = "yes";
//   console.log("It's one of the cleanest cities");
// }
// }
// if (matchFound === "no") {
//   console.log("It's not on the list");
// }
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++) {
    if ("Islamabad" === cleanestCities[i]) {
        matchFound = true;
        console.log("It's one of the cleanest cities");
        break;
    }
}
if (matchFound === false) {
    console.log("It's not on the list");
}
console.log(numElements);
console.log(i);
console.log(matchFound);
