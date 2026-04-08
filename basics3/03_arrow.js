const user={
    username:"gulshan",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to the website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="gojow"
// user.welcomeMessage()
// console.log(this)

// function one(){
//     let username="gulshan"
//     console.log(this.username)
// }
// one()
// const fun=function one(){
//     let username="gulshan"
//     console.log(this.username)
// }
// one()
const func = () => {
    let username="gulshan"
    console.log(this)
}
// func()
// const addtwo=(num1,num2) => {
//     return num1+num2
// }
// const addtwo=(num1,num2) => num1+num2
// const addtwo=(num1,num2) => (num1+num2)
const addtwo=(num1,num2)=>({username:"gulshan"})
console.log(addtwo(4,5))

const myarr=[2,5,3,7,8]

// myarr.forEach()