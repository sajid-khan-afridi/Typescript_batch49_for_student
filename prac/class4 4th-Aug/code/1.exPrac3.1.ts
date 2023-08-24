const arr1=["hello","world"];
arr1[1]="new world";
console.log(arr1)

// const array can not be rewrite with new value
// const arr2=["hello","world"];
// arr2="new world"

// typescript will guard array type to reassign the string value 
// let arr3=["hello","world"];
// arr3="new world"