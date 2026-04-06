// Primitive 

// 7 types : String ,Number , Boolean , null, undefined, Symbol , BingInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const bigNumber = 12345687643n


//Refrence (non-primitive)

// Array , Objects, Functions


const heroes = ['shakitiman','naagraj','doga']
let myObj={
    name:'hitesh',
    age: 22,
}

const myFunction=function(){
    console.log("hello world");
}

console.log(typeof bigNumber)

// ++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(non-Primitive)

let myYoutubename="gulshan kumar"
let anothername=myYoutubename
anothername="gullu"
console.log(myYoutubename)
console.log(anothername)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo=userOne

usertwo.email="gulshan@gmail.com"

console.log(usertwo)
console.log(userOne)