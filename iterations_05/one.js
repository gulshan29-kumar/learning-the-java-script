//for
for (let  index= 0; index < 10; index++) {
    const element =index;
    if(index==5){
        console.log("5 is the best number")
    }
    console.log(element)
    
}
// console.log(element);

for(let i=0;i<=10;i++){
    console.log(`Outer Loop value :${i}`)
    for(let j=0;j<10;j++){
     console.log(`Inner loop value ${j} and inner loop ${i}`)
    }
}
let myarray=["gulu","billu","supreme"]
for(let index=0;index<myarray.length;index++){
    console.log(myarray[index])
}
//break and continue
for(let i=0;i<10;i++){
    if(i==5){
        console.log("5 appears");
        break;
        
    }
    if(i==2){
        continue;
    }
    console.log(`no apper till four except two ${i}`);
    
}