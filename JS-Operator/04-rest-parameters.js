//! 04-rest-parameters.js

// Rest parameters allow a function to accept an indefinite number of arguments as an array.
// It was introduced in ES6 (ECMAScript 2015).
// it also can applied for array or object to store elements or properties.

// Syntax : function functionName(...restParameter) { 
//                            function body}

//: Rest parameters in functions
console.log(`rest parameters with functions`);

function greet(greet,...names){
    for (const i of names) {
        console.log(`${greet}, ${i}!`);
    }   
}

greet(`Hello`, `Deepak`, `Alice`, `Charlie`);

//: Rest parameters with arrays
console.log(` `);
console.log(`rest parameters with arrays`);
const arr1=[1,2,3,4,5];
const [first, second, ...rest]=arr1;
console.log(first);
console.log(second);
console.log(rest);

//: Rest parameters with objects
console.log(` `);
console.log(`rest parameters with objects`);
const person={
    name:"Deepak",
    age:22,
    city:"Bangalore",
    native:"Chikmagalur"
};
const {name, age, ...restProps}=person;
console.log(name);
console.log(age);
console.log(restProps);