//* Instance-of-obj

// SYNTAX:
//      var ObjectName = new Object();

//: EXAMPLE 1:

var car= new Object()
car.name= "BMW";
car.model= "X5";
car.year= 2022;
console.log(car); // { name: 'BMW', model: 'X5', year: 2022 }
console.log(car.name);