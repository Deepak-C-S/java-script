//* 02.READ.js

// SYNTAX:
//      ObjectName.key
//      ObjectName["key"]


let person = {
    name : "Deepak C S",
    age : 22,
    city : "Bengaluru"
};

console.log(person);        // { name: 'Deepak C S', age: 22, city: 'Bengaluru' }
console.log("------------------------------");
console.log("Using Dot Notation:");
console.log(person.name);   // Deepak C S
console.log(person.age);    // 22
console.log(person.city);   // Bengaluru
console.log("------------------------------");

// AND ANOTHER METHOD TO READ THE VALUE OF AN OBJECT IS USING THE SQUARE BRACKET NOTATION:
console.log("Using Square Bracket Notation:");
console.log(person["name"]); // Deepak C S
console.log(person["age"]);   // 22
console.log(person["city"]);  // Bengaluru