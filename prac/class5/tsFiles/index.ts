let obj={
    age:15,
    name:"Ahmad",
    myFun() {
    console.log("hello")    
    },
    myFun2:function(){
        console.log("property")
    }
}
obj.age;
obj.myFun();
obj.myFun2;
//property will always return a value
//method may return the value or not


//var vs let in array
let arr2 = [1, 2, 3, 4]; 
arr2 = [5, 6, 7, 8]; // This is fine

const arr3 = [1, 2, 3, 4]; 
// arr3 = [5, 6, 7, 8]; // This will throw an error

//You will get an error when you try to reassign a const variable.

const arr = [1,2,3,4];
arr[0] = 10; // This will cause an error
arr.push(5); // This will cause an error
arr.pop(); // This will cause an error

console.log("string".concat("hello"));
console.log(arr.concat(5,6))