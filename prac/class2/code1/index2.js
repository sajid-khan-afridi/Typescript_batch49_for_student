"use strict";
// Problem with var
var greeter = "hey hi";
var times = 4;
if (times > 3) {
    var greeter = "say Hello instead";
}
console.log(greeter);
// "say Hello instead" for true
// "hey hi" for false
