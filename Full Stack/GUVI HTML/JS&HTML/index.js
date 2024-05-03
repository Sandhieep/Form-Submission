//console.log('Hello');
let buttongoogleOpen=document.getElementById('btn-google-Open');
buttongoogleOpen.addEventListener('click',function(){
    // console.log('button clicked!');
    window.open('https://www.google.com');
     buttongoogleOpen.textContent='Opening google.com in new tab!';
    // console.log(window.location.href)
});

let buttongoogleClose=document.getElementById('btn-google-Close');
buttongoogleClose.addEventListener('click',function(){
    // console.log('button clicked!');
    window.close();
     buttongoogleClose.textContent='Tab Closed';
    
});

// console.log(window.location.href)
//console.log(window.innerHeight,window.innerWidth)
//window.alert('alert message')
/*if(window.confirm('Are you sure')){
    console.log('user select OK')
}
else{
    console.log('user select CANCEL')
}*/
/*let name=window.prompt('Enter your name')
  console.log('hi $(name). Nice to meet you!')*/

/*function executeThis(){
    console.log('execute after 5 seconds');
}
window.setTimeout(executeThis,5000)*/

/* let i=0;
 function Incrementer(){
     //document.write(i)
     document.getElementById('timer').innerText=i;
     i++;
 }
 window.setInterval(Incrementer,5000)*/


 //DOCUMENT OBJECT MODEL(DOM)
 let para=document.getElementById('timer')
 /*console.log(para.innerText)
 console.log(para.style.color)
 para.innerText='Welcome';*/

 /*para.innerHTML=`<ol>
 <li>item1</li>
 <li>item2</li>
 <li>item3</li>
 <li>item4</li>
 </ol>`*/

 /*let newele=document.createElement('p')
 newele.textContent='keep child inside into parent'
 para.appendChild(newele)*/

 //XMLHttpRequest
 /*const xhr=new XMLHttpRequest()
 xhr.open('GET','URL');
 /*xhr.onload=function(){
    //response Handling
    console.log(JSON.parse(xhr.response));
 }*/

//  xhr.onload=function(){
//     //response Handling
//     const data=JSON.parse(this.responseText)
//     console.log(data[0].address.zipcode)

//     document.getElementById('timer').innerText=data[0].address.zipcode;
//  }
/*xhr.send()*/
