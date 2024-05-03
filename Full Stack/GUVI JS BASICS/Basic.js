//let arr=[2,3,4];
/*let output='';
output+=arr[0]+' '+arr[1]+' '+arr[2];
console.log(output);*/

//console.log(arr.join(' '));                   //-->2 3 4 join elements with given space

//LOOPS:

//let output='';
/*arr.forEach((i) => {            //-->forEach loop
    output+=i + ' ';                       
});                                           //output=2 3 4_  one extra space in last
console.log(output.trim());*/                 //output=2 3 4   output.trimRight();-->it is remove space in right side


/*for(let i of arr)               //-->using 'of' keyword loop
{
    output+=i + ' ';
}
console.log(output.trim());*/


/*for(let index in arr)           //-->using 'in' keyword loop
{
    output+=arr[index] +' ';
}
console.log(output.trim());*/


/*for(let index=0;index<arr.length;index++)      // -->normal loop
{
    output+=arr[index] +' ';
}
console.log(output.trim());*/

/*let a=['guvi'];
console.log(a[0].split('').join(' '));*/   //-->split each character and join with space

/*let b="guvi";
let out='';

for(let i=0;i<b.length;i++)
{
    out+=b[i]+' ';
}
console.log(out);*/


/*let arr1=['2.5,3,5,4.5'];
//let [first,second,third] = arr1[0].split(' ');
let [first,second,third] = arr1[0].split(' ').map((i) => {      //-->convert String to Float
    return parseFloat(i);
});
console.log(first,typeof(first));*/

//console.log(typeof(+'17'));

//OBJECTS:

/*let user = {
    name :'Krish',
    age : 21,
    gender : 'male',
    isLoggedIn:true,
    lastLoggedIn:new Date(Date.now())
};
console.log(user);

console.log(Objects.keys(user))
for(let key of Objects.keys(user)){
   console.log(`${keys}:${user[key]}`)

console.log(Objects.values(user))
for(let values of Objects.values(user)){
   console.log(`${values}`)

}*/

//Hoisting
/*console.log(age)
let age=15*/

/*console.log(age)
var age=15
console.log(age)*/

//Count vowels using function
/*function countvowels(sentence){
    let count=0;
    for(let letter of sentence){
        switch(letter){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++;
        }
    }
    return count
}
let sentence='Hello! I am sandhieep'
console.log(countvowels(sentence))

function countspaces(sentence){
    let space=0
    for(let char of sentence){
        if(char==' '){
            space++
        }
    }
    return space
}
function countconsonents(sentence){
    return sentence.length - countvowels(sentence) - countspaces(senetence);
}
console.log(countconsonents*/