// var c=300
let a=300
if(true){
   let a =10
    const b=20
  console.log("INNER",a);
  
} 
// console.log(a);
// console.log(b);
console.log(a);
// for(int i=0;i<array.length;i++){
//     const ealement=array[i];
// }

function one(){
  const username="bila"
  function two(){
    const website="youtube"
    console.log(username)
  }
  // console.log(website)
  two()
}
one()

if(true){
  const username="gulu"
  if (username==="gulu"){
    const website ="you tube"
    console.log(username+website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++ interesting ++++++++++++
console.log(addone(6))
function addone(num){
   return num+1
}
console.log(addtwo)//it will generate error
const addtwo=function(num){
  return num+2
}
addtwo(5)
