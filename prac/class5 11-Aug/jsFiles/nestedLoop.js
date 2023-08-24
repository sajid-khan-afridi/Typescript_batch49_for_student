"use strict";
let arr = ["karachi", "islamabad", "lahore", "quetta"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i].charAt(j));
    }
}
