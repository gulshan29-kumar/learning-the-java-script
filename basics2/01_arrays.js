//array
const myarr=[0,1,2,3,4,5,true,"gulsan"]
console.log(myarr[0])
const myhearos=["bila","bulla"]
const myrarr2=new Array(1,2,3,4)
console.log(myarr[1])

//Array methods

myarr.push(6)
myarr.pop()
console.log(myarr);

// myarr.unshift(9)

// myarr.shift()

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(9))
// const newArr=myarr.join()
// console.log(myarr);
// console.log(newArr);

// slice,cplice

console.log("A",myarr);

const myn1=myarr.slice(1,3)
console.table([myn1,myarr])
const myn2=myarr.splice(1,3)
console.table([myn2,myarr])