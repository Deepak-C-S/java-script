//! 03-array-destructuring.js

// Array destructuring is a convenient way to extract values from arrays and assign them to variables.
// It was introduced in ES6 (ECMAScript 2015).

//: Array Destructuring

const arr=[1,2,3];
// Old way
const a=arr[0];
const b=arr[1];
const c=arr[2];
console.log(a, b, c);  // 1 2 3

// New way using array destructuring
const [x, y, z]=arr;
console.log(x, y, z);  // 1 2 3
