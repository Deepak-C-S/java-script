//* 01-Create.js


let person = {
    name : "Deepak C S",
    age : 22,
    city : "Bengaluru"
};
console.log("-------------BEFORE INSERT-----------------");
console.log(person); // { name: 'Deepak C S', age: 22, city: 'Bengaluru' }
console.log("-------------AFTER INSERT-----------------");
person.dept="AIML"
person["college"] = "CEC";
console.log(person); // { name: 'Deepak C S', age: 22, city: 'Bengaluru', dept: 'AIML', college: 'CEC' }