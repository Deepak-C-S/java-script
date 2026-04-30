//! 01-spread-operator.js

//  ...<object/array>  
// It is used to copy properites of one object into another object .
// It is also used to copy element of one array into another array . 

//: Spread operator with objects

const obj1={
    name:"Deepak",
    age:22
};
const obj2={
    ...obj1,            // Copying properties of obj1 into obj2
    city:"Bangalore",
    native:"Chikmagalur"
};
console.log(obj2);  // { name: 'Deepak', age: 22, city: 'Bangalore', native: 'Chikmagalur' }

//: Spread operator with arrays

const arr1=[1,2,3];
const arr2=[...arr1,4,5,6];
console.log(arr2);  // [1, 2, 3, 4, 5, 6]   