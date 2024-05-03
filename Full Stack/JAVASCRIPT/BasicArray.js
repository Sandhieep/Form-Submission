// a=5
// console.log(a)
// a=true
// console.log(a)
// b='hello'
// console.log(b)

// let,var,const

// var a=true

// //redeclaration
// let a='hi'
// console.log(a)
// //reinitialization
// a=6
// console.log(a)


// let b=5

// b='hi'
// console.log(b)

// const k='hi'
// k='hello'
// console.log(k)


//undefined
// let u
// console.log(u)
// //null
// let k=null
// console.log(k)

//arrays

// let arr=['cr7','lm10','njr']
// console.log(arr[2])

// let arr=[1,'njr',3,'cr7',true]

//push,pop,unshift,shift
// arr.push('lm10')
// arr.pop()

// arr.unshift('lm10')
// arr.shift()


// console.log(arr.length)

let arr=[1,2,3,4]
//1,4,9,16
let sqr=[]
for(let i=0;i<arr.length;i++){
    sqr.push(arr[i]*arr[i])
}

sqr.reverse()
console.log(sqr)
