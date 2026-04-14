//*  Object-Constructor

// SYNTAX:
//      function ObjectName (param1, param2, param3){
//          this.key1 = param1;
//          this.key2 = param2;
//          this.key3 = param3;
//      }

//: EXAMPLE 1:

function person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}
var person1 = new person("Deepak C S", 22, "Bengaluru");
console.log(person1);
console.log(person1.name); // Deepak C S
console.log(person1.age);

var person2 = new person("Ujwal D ",23, "Bengaluru");
console.log(person2);
