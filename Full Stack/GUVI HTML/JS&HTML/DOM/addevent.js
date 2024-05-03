var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Submit";
button.addEventListener("click",foo);
document.body.append(button);
function foo(){
    // console.log("Hello World!");
    // alert("This is me!!");
   var ele= parseInt(prompt("enter the age:")); // It will be a String
    console.log(ele);
}