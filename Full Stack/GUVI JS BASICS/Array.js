//let array=[1,2,3,4,5,6,7,8,9,10];

// Without map method
/*for(let i=0;i<array.length;i++)
{
    array[i]=array[i] + 10;
}
console.log(array);*/

//With map method
/*array=array.map((item) =>  item + 10);
console.log(array);*/

//DECLARATION
/*let person = [15,'dada',true,38.5,[55,66,77]];    //-->It stores all datatype values
console.log(person[4][1]);
let [id,name,age] = [13,'john',21];
console.log(id,age);
let array=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}*/
    

//METHOD
//PUSH,POP,UNSHIFT,SHIFT,SPLICE,JOIN,SORT,MAP,SPREAD
/*let arr=[1,2,3,4,5,6];
arr.push(7);                //-->insert elements in last position
console.log(arr);

arr.pop();                  //-->remove elements and remove from last
console.log(arr);

arr.unshift(10);            //-->It insert element from front
arr.unshift(11,12);
console.log(arr);

arr.shift();                //-->remove element from front
console.log(arr); 

arr.splice(2,1,15);         //(index,count of delection,element);-->insert in particular index
console.log(arr);
         
console.log(arr.join(''));  //join all vlaues as string without any spaces('',' ',,,)
  
arr.sort((a,b) => a-b);     //sort element in ascending order
console.log(arr);
arr.sort((a,b)=>b-a);       //sort element in descending order
console.log(arr);

let arr=[3,5,3,7,9,4];
arr=arr.map((item)=>{        //map cannot change the array values..
     return item*5;          //we can assign in the existing array to display map values
});
console.log(arr);*/   

/*let numbers=[5,6];
let names=['red','blue'];
let [first,second]=numbers;   //Array destructuring
console.log(first,second);*/


// SORT
/*let arr=['z','y','x'];
console.log(arr.sort());*/

//let arr=[5,4,3,2,1];
/*arr.sort((a,b) => a-b);    // Sort Approach 1
console.log(arr);*/

/*function sorter(a,b) {    // Approach 2
    return a-b;
}
arr.sort(sorter);
console.log(arr);*/
   
/*let sorter = (a,b) => {  // Approach 3
    if(a<b)
    return -1;
    else if(a>b)
    return 1;
    else
    return 0;
}
arr.sort(sorter);
console.log(arr);*/

//Find nth Largest number in an duplicate array
/*let arr=[2,7,3,9,6,3,5,1,4,7,34,65];
arr.sort((a,b)=>b-a);               //Desending order

let numbers=arr.reduce((accumulator,current)=> {
      if(!accumulator.includes(current))
      {
        return [...accumulator,current];
      }
      return accumulator;
},[]);
//console.log(numbers);

let n=5;
if(n<=numbers.length){
    console.log(numbers[n-1]);
}
else{
    console.log(-1);
}*/


//reduce()=>It can call a function which is given inside ().
/*let arr=[1,2,3,4,5];
let sum=arr.reduce(reducer);    //reducer is an call back function
function reducer(previous,current){
    console.log(previous,current);
    return previous+current;
}
console.log(sum);

let initialvalue=0;
let sums=arr.reduce(reducer,initialvalue);  // initialvalue is taken as previous value => 0.
console.log(sums);*/

//Store in array with reduce

/*let arr1=[1,2,3,4,5,1,3,2,5];
function reducer(previous,current){
    console.log(previous,current);
    if(!previous.includes(current)){
        return [...previous,current];
    }
    return previous; 
}
let initialvalue=[];
let sum1=arr1.reduce(reducer,initialvalue);  // initialvalue is taken as array(previous value) => 0.
console.log(sum1);*/

//Spread
/*let arr1=[1,2,3,4,5];
let arr2=[6,7,8];
let arr3=[...arr1,...arr2];              //It is used to unpack an elements([1,2,3]=>1 2 3).
console.log(arr3);*/

//Destructuring
/*let [name,age,salary]=['sandheep',15,1000]
console.log(name,age,salary)
//let [name,...ageSalary]=['sandheep',15,1000]    //rest spread
//console.log(name,ageSalary)*/


//Given n,array,window size(k)..Find first negative value with given window size(k)
/*let n=7;
let arr=[1,-2,-3,-4,5,6,-7];
let k=3;
let res=[];
for(let i=0;i<=n-k;i++)
{
   let window=arr.slice(i,i+k);
   let positive=true;
   for(let j=0;j<window.length;j++)
   {
    if(window[j]<0){
        res.push(window[j]);
        //console.log(window,':',window[j]);
        positive=false;
        break;
    }
   }
   if(positive){
    res.push(0);
    //console.log(window,':',0);
   }
}
console.log(res.join(' '));*/

//Remove Immediate Duplicate Numbers
/*let arr=[1,3,3,1];
let res=[];
for(let i=0;i<=arr.length;i++){
    if(arr[i]!=arr[i+1]){
        console.log(arr[i]);      
    }
    else{
        let j=i+1;
        while(arr[i]==arr[j]){
            j++;
        }
        i=j-1;
    }    
}
console.log(res.join(''));*/  

/*let arr=[1,3,3,1];
let res=[];
for(let i=0;i<=arr.length;){
    if(arr[i]!=arr[i+1]){
        res.push(arr[i]);
        i++;      
    }
    else{
        let digit=arr[i];
        while(digit==arr[i]){
            i++;
        }
    }    
}
console.log(res);*/

//Find the Occurence in an Array
/*let n=10;
let arr=[1,1,1,2,2,2,3,8,9,7];
let q=5;
let questions=[1,2,3,0,5];
let result=[];
for(let i=0;i<q;i++){
    let count=0;
    for(let j=0;j<n;j++){
        if(questions[i]==arr[j]){
            count++;
        }
    }
    if(count!=0){
       result.push(count);
    }
    else{
        result.push('Not Present');
    }
}
console.log(result.join(' '));*/


// let n=7;
// let arr=[10,7,9,3,2,1,15];    //7 3 3 2 1 -1 -1
// let res=[];
// let min=arr[0];
// for(let i=1;i<n;){
//     if(arr[i]<min){                                 //Wrong program
//         res.push(arr[i]);
//         i++;
//     }
//     else{
//           i++;
//     }
// }
// console.log(res);