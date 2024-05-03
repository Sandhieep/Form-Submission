//Copy by value
/*let a=5
let b=a
console.log(a,b)
b++;
console.log(a,b)*/

//Copy by reference
/*let arr1=[1,2,3,4]
let arr2=arr1               //two array points to same object
console.log(arr1)
console.log(arr2)
arr2.push(6)
console.log(arr1)          //Shallow copy
console.log(arr2)*/

//deep copy  /*copy by value*/
let arr1=[1,2,3,4]
let arr2=[...arr1]//arr2=Array.from(arr1) or arr1.slice()        //...spread operator         
console.log(arr1)
console.log(arr2)
arr2.push(6)
console.log(arr1)          
console.log(arr2)