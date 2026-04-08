//for of
//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]
for (const element of arr) {
    console.log(element)
}
const greet="my name is gulshan"
for (const char of greet) {
    console.log(char)
}

// Maps

const map=new Map()
map.set("In","India")
map.set("Us","USA")
console.log(map)

for (const [key,value] of map) {
    console.log(key,":",value);
}
//for of function will not work on dictionary objects
