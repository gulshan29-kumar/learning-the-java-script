// if
const isuserloggedIn= true;
const temprature=50
// if(temprature==41){    //strict checking 
//  console.log("temprature is 41");
// }
// else {
//     console.log("temprature is not 41");
    
// }

//<,>,<=,>=,==,!=,===
// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`user power :${power}`)
// }
// console.log(`user power :${power}`)

const balance=1000

// if(balance>500) console.log("test") ,console.log("test2"); it will work but it destroy the code readiability

// if(balance<500){
//     console.log("less than");
// }
// else if(balance<750){
//     console.log("less than 750")
// }
// else {
//     console.log("the balance is grater than 750")
// }
const userLoggedIn=true
const debitCard=true
const loggedingoogle=false
const loggedinemail=true
if(userLoggedIn&&debitCard){
    console.log("allow to buy courses");
}
if(loggedinemail||loggedingoogle) console.log("user logged in successfully")