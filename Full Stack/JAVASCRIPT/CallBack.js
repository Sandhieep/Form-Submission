let radius=[1,2,3,4]

function diameter(r){
    return 2*r
}

function Area(r){
    return Math.PI*r*r
}

function Circumference(r){
    return 2*Math.PI*r
}

function Calculate(myRadius,logic){
    let result=[]
    for(let i=0;i<myRadius.length;i++)
    {
        result.push(logic(myRadius[i]))
    }
    return result
}

// let finalResult=Calculate(radius,diameter)
// let finalResult=Calculate(radius,Area)
let finalResult=Calculate(radius,Circumference)
console.log(finalResult)




//deadcode
//object
// let person1={
// name:"sandhieep",
// phone:7373,
// age:22,
// isMarried:false
// }
// console.log(person1.isMarried)


//cb-callback
//callback-higherOrderFunction
// function callback(cb){
// console.log(cb)
// }

// function myfunc(){
// let hi="hi from myfunc"
// return hi
// }

// callback(myfunc())