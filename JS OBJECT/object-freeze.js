//* object-freeze

// SYNTAX: Object.freeze(object)
// Object.freeze() is a method used to freeze an object.
// You cant add, delete or update any property of the object after freezing it.

let person={
    name:"Deepak C S",
    age:22,
    dept:"AIML"
}
console.log(person)
Object.freeze(person)         //: it will not allow to update, add or delete any property of the object 

person.name="Deepak Kumar"  //: it will not update the name property because the object is frozen
console.log(person)

delete person.age           //: it will not delete the age property because the object is frozen
console.log(person)
