//! 02-object-destructuring.js

// Object destructuring is a convenient way to extract values from objects and assign them to variables.
// It was introduced in ES6 (ECMAScript 2015).


//: Object Destructuring

const person={
    name:"Deepak",
    age:22,
    city:"Bangalore"
};

// Old way
const name=person.name;
const age=person.age;
const city=person.city;
console.log(name, age, city);  // Deepak 22 Bangalore

// New way using object destructuring
const {name, age, city}=person;
console.log(name, age, city);  // Deepak 22 Bangalore

// You can also assign new variable names while destructuring
const {name:personName, age:personAge, city:personCity}=person;
console.log(personName, personAge, personCity);  // Deepak 22 Bangalore

