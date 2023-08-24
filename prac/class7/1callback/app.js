"use strict";
function func(callback) {
    callback();
}
function callback() {
    console.log("hello");
}
func(callback);
