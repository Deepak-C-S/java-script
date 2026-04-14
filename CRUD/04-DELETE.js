//* 04-DELETE

// SYNTAX:
//      delete ObjectName.key;

let person = {
    name : "Deepak C S",
    age : 22,
    city : "Bengaluru"
};

console.log("-------------BEFORE DELETE-----------------");
console.log(person); // { name: 'Deepak C S', age: 22, city: 'Bengaluru' }

delete person.age;

console.log("-------------AFTER DELETE-----------------");
console.log(person); // { name: 'Deepak C S', city: 'Bengaluru' }