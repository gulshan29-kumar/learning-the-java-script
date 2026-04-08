const mynums=[1,2,3]
// const mytotal=mynums.reduce(function(acc,currval){
//     console.log(`acc ${acc} and currval ${currval}`)
//     return acc+currval
// },0)
const mytotal=mynums.reduce((acc,curr) => acc+curr,0)
console.log(mytotal)

const shoppingCart=[
    {
        itemName:"jscourse",
        price:5000
    },
    {
        itemName:"jscourse",
        price:5000
    },
    {
        itemName:"jscourse",
        price:5000
    },
    {
        itemName:"jscourse",
        price:5000
    }
]
const pric2=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pric2);
