greet("Hoisted");
function greet(name) {
    console.log("hello " + name.toUpperCase() + "!");
}
greet("Hassan");
function myFavoriteNumber() {
    return 26;
}
var num1 = myFavoriteNumber();
console.log(num1);
var sum1 = function (x, y) {
    return x + y;
};
console.log(sum1(10, 20));
var sum2 = function (x, y) { return x + y; };
console.log(sum2(20, 20));
