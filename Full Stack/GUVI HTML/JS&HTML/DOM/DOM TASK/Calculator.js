let upppertext=document.querySelector('.uppertext');
let text=document.querySelector('#text');
let btn=document.querySelectorAll('button');
let num=document.querySelectorAll('.num');
let op=document.querySelectorAll('.op');
let eq=document.querySelector('.eq');
let cancel=document.querySelector('.cancel');

let ans="";
//upppertext.innerHTML="";
function getValue(ans){
   upppertext.value=ans;
   text.value=eval(ans);
}

for(let i=0;i<btn.length;i++){
   btn[i].addEventListener('click',function(e){
        
         if(btn[i].value=='='){
            getValue(ans);
            /*upppertext.value=ans;
            text.value=eval(ans);*/
            //upppertext.value="";
         }
         else{
            //ans="";
            ans+=btn[i].value;
            //text.value+=btn[i].value;
            upppertext.value+=btn[i].value;
            //ans.value+=upppertext.value;
         }
         if(btn[i].value=='C'){
            ans="";
            upppertext.value="";
            text.value="";

         }
      
      });
   }

   text.addEventListener('keypress',function(e){
        if((e.key>0 && e.key<10) || e.key=='*' || e.key=='-' 
        || e.key=='+' || e.key=='/'){
         upppertext.value+=e.key;
         ans=upppertext.value;
        }
        else if(e.key=='Enter'){
         text.value=eval(ans);
        }
   });



