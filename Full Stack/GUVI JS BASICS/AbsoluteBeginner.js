//Quadratic formula
/*let arr=['1 5 6'];
let [a,b,c]=arr[0].split(' ').map((item) => parseInt(item));    // String to Integer

let ans1= (-b + Math.sqrt(b**2 - (4*a*c))) / (2*a);
let ans2= (-b - Math.sqrt(b**2 - (4*a*c))) / (2*a);
console.log(ans1.toFixed(2));                   //toFixed() => for taking upto particular digits which we want
console.log(ans2.toFixed(2));*/                      // Only in decimals zeros.... 

/*let month=13;

   if(month>=1 && month<=12)
   {
      switch(month)
      {
        case 1:
            console.log('31');
            break;
        case 2:
            console.log('28');
            break;
        case 3:
            console.log('31');
            break;
        case 4:
            console.log('30');
            break;
        case 5:
            console.log('31');
            break;
        case 6:
            console.log('30');
            break;
        case 7:
            console.log('31');
            break;
        case 8:
            console.log('31');
            break;
        case 9:
            console.log('30');
            break;
        case 10:
            console.log('31');
            break;
        case 11:
            console.log('30');
            break;
        case 12:
            console.log('31');
            break;
        default:
            console.log('Invalid Input');
            break;
            
      }      
   }
   else
   {
    console.log('Error');
   }*/


// HCF
// let num1=8;
// let num2=3;

// let fac=num1<num2?num1:num2;
// if(num1%fac==0 && num2%fac==0)
// {
//     console.log(fac);
// }
// else
// {
//     fac--;
//     while(fac>0)
//     {
//         if(num1%fac==0 && num2%fac==0)
//         {
//             console.log(fac);
//             break;
//         }
//         else
//           fac--;
//     }
// }

// EVEN AND ODD NUMBERS
/*let arr=['1234'];
let n1=arr[0].split('').map((item)=> parseInt(item));
let even=[];
let odd=[];
n1.forEach((i) => {
    if(i%2==0)
    {
       even.push(i);
    }    
    else{
        odd.push(i);
    }
});
even.sort((a,b) => a-b);
odd.sort((a,b) => a-b);
console.log(even.join(' '));
console.log(odd.join(' '));
console.log(even);
console.log(odd);*/

/*let arr=['GUVI'];
let n1=arr[0].split('');
let i=1;
let str='';
while(i<=n1.length)
{
    //let i=1;
    str+=n1[n1.length-i];
    i++;
}
console.log(str);*/