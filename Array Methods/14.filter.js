//* 14.filter

var user=[
    {name:"deepak",age:53},
    {name:"suprith",age:24},
    {name:"chaulva",age:25},
    {name:"ujwal",age:26}]

let age_check=user.filter(function(element)
{
    return element.age>40
})

console.log(age_check)