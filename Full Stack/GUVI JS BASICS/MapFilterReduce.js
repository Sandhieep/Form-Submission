//let array=[1,2,3,4,5]
//MAP=>It is a method which is used to fetch the values only in the array

/*console.log(array.map((item) =>{
    return item*2
}));*/

 /*array=array.map((item) =>{
    return item*2
});
console.log(array)*/

/*let multiplyby2 = (item) =>{
    return item*2;
};
array=array.map(multiplyby2)
console.log(array)*/

//Map can passes 3 arguments
/*array.map((value,index,array) =>{
 console.log(value,index,array)
});*/

/*let sentence='the deep brown fox';
let words=sentence.split(' ');
//console.log(words);
console.log(words.map((word) =>{
    return word.charAt(0).toUpperCase() + word.slice(1,)
}).join(' '));*/


//REDUCE

 //Sum of elements in an array
/*let arr=[1,2,3,4,5]
let sum=arr.reduce((previousvalue,currentvalue)=>{
    //console.log(previousvalue,currentvalue)
     return previousvalue + currentvalue            //return value is stored as next previous value
});
console.log(sum)*/

/*let initialvalue=0;
let sum=arr.reduce((previousvalue,currentvalue)=>{
    //console.log(previousvalue,currentvalue)
     return previousvalue + currentvalue            //return value is stored as next previous value
},initialvalue);                                   //initialvalue can be taken as previousvalue
console.log(sum)*/

//Remove duplicate elements
/*let arr=[1,2,3,4,2,5,1,6,5,8];
let array=arr.reduce((previousvalue,currentvalue)=>{
      if(!previousvalue.includes(currentvalue)){
        return [...previousvalue,currentvalue];      //push non-contain elements in an array
      }
      else{
         return previousvalue;
      }
},[]);
console.log(array);*/


//FILTER
//It can filter according to the condition based
/*let arr=[1,2,3,4,5,6,7,8,9,10];
let array=arr.filter((number)=>{
    return number%2==0;
});
console.log(array);*/

//print consonants
/*let sentence='javascript';
console.log(sentence.split('').filter((char)=>{
     if(!(char=='a' || char=='e' || char=='i' || char=='o' || char=='u')){
        return true;
     }
}).join(''));*/