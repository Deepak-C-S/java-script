//* 16.sort

var user=[
    {name:"deepak",age:53},
    {name:"suprith",age:24},
    {name:"chaulva",age:25},
    {name:"ujwal",age:26}]

user.sort((a, b) => a.age - b.age)
console.log(user)