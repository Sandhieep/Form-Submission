//callback and their terminologies
//synchronous vs Asynchronous
//inbuilt Asynchronous Function
/*console.log("App is starting....");
setTimeout(()=>{
  console.log("App is under Construction");
},3000);
//console.log("App is under prod.....");
setTimeout(()=>{
    console.log("App is under prod.....");
  },3000);*/


  //Promises
  
  /*var age=pareseInt(prompt("Enter the age"));
  var p1=new Promise(()=>{
     if (age>=18){
        resolve("You are eligible to vote");
     }
     else{
        reject("You are not eligible to vote");
     }
  });
  console.log(p1);*/

 /* var p1=new Promise((resolve,reject)=>{
   //  resolve("This is resolved");
   reject("This is rejected");
 });
 console.log(p1);
 p1.then((data)=>console.log(data)).catch((error)=>console.log(error));*/

 /*Function return promises */
 /*function foo(){
   return new Promise((resolve,reject)=>reject("this is foo"));
 }
 foo().then((data)=>console.log(data)).catch((error)=>console.log(error));*/

 /*function foo(){
   return new Promise((resolve,reject)=>{
   setTimeout(()=>resolve("This reslove for foo"),3000);
   });
 }
 foo().then((data)=>console.log(data)).catch((error)=>console.log(error));*/

 //Dependent Operations
 /*function bar(num){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>resolve(5*num),3000);
   })
 }
//  console.log(bar(5));
bar(5).then((data)=>{
   console.log(data);  // output:25
   return bar(data);  //bar(25) -> return a promise
}).then((data1)=>{
   console.log(data1);
   return bar(data1);
}).then((data2)=>console.log(data2));*/

/*function bar(num){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>resolve(5*num),3000);
   })
 }

function foo(num){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>resolve(5*num + "This is rejected state"),3000);
   })
 }
 bar(5).then((data)=>{
   console.log(data);  // output:25
   return bar(data);  //bar(25) -> return a promise
}).then((data1)=>{
   console.log(data1);
   return foo(data1);
}).then((data2)=>console.log(data2)).catch((error)=>console.log(error));*/


//Handling the Promises

/*var p1=new Promise((reslove,reject)=>{
   if(true){
      setTimeout(()=>reslove("This is p1 resolved"),1000);
   }
   else{
      setTimeout(() => reject("This is p1 rejected"), 3000);
   }
});

var p2=new Promise((reslove,reject)=>{
   if(true){
      setTimeout(()=>reslove("This is p2 resolved"),2000);
   }
   else{
      setTimeout(() => reject("This is p2 rejected"), 3000);
   }
});

var p3=new Promise((reslove,reject)=>{
   if(false){
      setTimeout(()=>reslove("This is p3 resolved"),5000);
   }
   else{
      setTimeout(() => reject("This is p3 rejected"), 3000);
   }
});

Promise.allSettled([p2,p3,p1]).then((data)=>console.log(data)).catch((error)=>console.log(error));*/

// fetch

var country=document.querySelector('.country');
var cc=document.querySelector('.capital');

var p1=fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
.then((data1)=>{
   for(let i=0;i<data1.length;i++){
      console.log(data1[i].capital)
      cc.append(data1[i].capital);
      //document.body.append(cc);
   }
   
});
