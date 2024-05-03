let transactions=[1000,3000,4000,2000,-898,3800,-4500]

let inrtousd=80

//Map
//num=trans[0]
// let conversion=transactions.map(function(e){
// return e/inrtousd
// })
// console.log(conversion)

//Filter

// let conversion=transactions.filter(function(num){
// return num>0
// })
// console.log(conversion)

//Reduce

// let conversion=transactions.reduce(function(num,sum){
// sum=sum+num
// return sum
// })
// console.log(conversion)


let arr=[1,2,3]
let add=arr.reduce(function(k,sum){
    sum=sum+k
    return sum
})
console.log(add)