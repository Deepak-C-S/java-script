//* object-entry

// Object.entries() method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs.

let obj = {
    name:"Deepak C S",
    age:22,
    dept:"AIML"
}

console.log(obj)
let entries=Object.entries(obj)

for(let entry of entries){
    console.log(entry)
}
