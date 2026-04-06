// const tinderuser=new Object()  it is singleton object
const tinderuser={} //it is non singleton object
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn=false

// console.log(tinderuser);
const regularUser={
    email:"gulshan@gmains.com",
    fullname:{
        usefullname:{
        firstname:"gulshan",
        lastname:"kumar"
        }
    }
}
// console.log(regularUser.fullname.usefullname.firstname);
const obj1={
    1:"a",
    2:"b"
}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)//if we will not giving the bracke then it modify the obj1 to all 
const obj3={...obj1,...obj2}
// console.log(obj3);
const users=[
    {id:1,
    email:"bialla"
    },
    {id:2,
    email:"bialla"
    },
    {id:3,
    email:"bialla"
    },

]
console.log(users[1].email)
console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('isLogged'))

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"gulshan"
}
//course.courseInstructor

const {courseInstructor:instructor}=course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name":"Gulshan kumar",
//     "coursename":"js in hindi",
//    " price":free
// }

