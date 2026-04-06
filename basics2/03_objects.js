// singleton 

// object.create

//object literals
const mySym=Symbol("key1")

const jsuser={name:"gulshan",
    "full name":"gulshan kumar",
    [mySym]: "mykey1",
    age:18,
    location:"jaipur",
    email:"gulshan@gmail.com"
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"])// it cant be accessed from the .method
// console.log(typeof jsuser[mySym])

// jsuser.email="gulsha@iitranchi.ac.in"
// Object.freeze(jsuser)
// jsuser.email="owtn"
// console.log(jsuser)

jsuser.greeting=function(){
    console.log("hello js user")
}
jsuser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`)
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo())


