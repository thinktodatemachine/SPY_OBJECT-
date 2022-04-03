// code 
//  creating object

let obj ;

const data = [
    {id:1,name:'some',age:"any"}
]
// new entry 
let newobj = {id:2,name:"aqw",age:"1233"};

data.push(newobj)

// finding specific entry index
const toModifyIdx = data.findIndex(item => item.id ===2);
// modifyihg on same index 
data[toModifyIdx].age=18;

// delete object 

const toDeleteIndx = data.findIndex(item=>item.id === 1);
data.splice(toDeleteIndx,1);

