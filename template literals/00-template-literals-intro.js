//!      00-template-literals-intro.js

// Template literals (also called template strings) are a way to work with strings in JS using backticks (`) instead of single or double quotes. 
// they were introduced in ES6 (ECMAScript 2015).
// String interpolation : Embeded expression using ${} syntax.
//Multiline strings : Write stings across multiple lines naturallly.

//: 01- String Interpolation

//* Old way

const name ="Deepak C S";
const age=22;
const res="Hello, my name is " + name + " and I am " + age + "."
console.log(res);  // Hello, my name is Deepak C S and I am 22.

//* New way using template literals

// const name ="Deepak C S";
// const age=22;
const res2=`Hello, my name is ${name} and I am ${age}.`
console.log(res2);  // Hello, my name is Deepak C S and I am 22.