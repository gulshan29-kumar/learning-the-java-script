const name="gulshan"
const repoCount=50

// console.log(name + repoCount+" Value")
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String(`gulshan-n`)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'))

const newString=gameName.substring(0,4)// this will not take negative indexes
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newStringOne="   gulshan  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://gulshan.com/gulshan%20kumar"

console.log(url.replace('%20','-'))

console.log(url.includes('gulshan'))

console.log(gameName.split('-'))