// all code goes 

let obj ;

const data = [
    {id:1,name:'some',age:"any"}
]

let newobj = {id:2,name:"aqw",age:"1233"};

data.push(newobj)

const toModifyIdx = data.findIndex(item => item.id ===2);
data[toModifyIdx].age=18;