//functions

function saymyName(){
    console.log("Gulshan")
}
// saymyName()

// function addTwoNo(number1,number2){
//     console.log(number1+number2)
// }
function addTwoNo(number1,number2){
//    let result =number1+number2
//    return result
//    console.log("gulshan")
   return number1+number2
}
const result=addTwoNo(3,5)
// console.log("Result: ",result)
function login(username="sam"){
    if(!username){
       console.log("please entar a username")
       return 
    }
    return `${username} just logged in`
}
// console.log(login())

function calculatecarprice(val1,val2,...num1){
    return num1;
}
console.log(calculatecarprice(200,400,600))
const user={
    username:"gulshan",
    price:199
}
function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username:"guls",
    price:10010
})
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,2004,600,5000]));

