//* 13.map

//! map() shd be return some value retureed by the function
//! map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

var emp=[{name:"deepak",salary:20000},
         {name:"suprith",salary:30000},
         {name:"chaulva",salary:40000},
         {name:"ujwal",salary:50000}
        ]
var increment=emp.map(function(Element){

    Element.salary+=Element.salary*10/100;
    return Element;
});

console.log("salary before increment:")
console.log(emp)
console.log("salary incremented by 10%")
console.log(increment)
