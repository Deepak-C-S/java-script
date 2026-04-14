//* 03-UPDATE

// SYNTAX:
//      ObjectName.key = newValue;

let person = {
    name : "Deepak C S",
    age : 22,
    city : "Kadur"
};
console.log("-------------BEFORE UPDATE-----------------");
console.log(person); // { name: 'Deepak C S', age: 22, city: 'Kadur' }

person["name"] = "Ujwal D";
person.age = 23;
person["city"] = "Tavrekere";
console.log("-------------AFTER UPDATE-----------------");
console.log(person); // { name: 'Ujwal D', age: 23, city: 'Tavrekere' }