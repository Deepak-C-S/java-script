//* 15.reduce

var user=[
    {name:"deepak",age:53},
    {name:"suprith",age:24},
    {name:"chaulva",age:25},
    {name:"ujwal",age:26}]


let avg=user.reduce((prev,curr)=>{
    return prev+curr.age
},0)

let avg_age=avg/user.length
console.log(avg_age)
