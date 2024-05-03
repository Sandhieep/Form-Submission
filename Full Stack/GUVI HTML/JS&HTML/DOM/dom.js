// Creating an HTML element Dynamically
    // var div = document.createElement("div");
    // div.innerHTML = "This is div";
    // document.body.append(div);

//Adding inine css to the element
    //   var div = document.createElement("div");
    //   div.innerHTML = "This is div";
    //   div.style.backgroundColor="blue";
    //   div.style.textAlign="center";
    //   document.body.append(div);

//Internal css
     /*Adding the Attribute
       <div class="main">this is div</div>*/

    // var div = document.createElement("div");
    //   div.innerHTML = "This is div";
    //  div.setAttribute("class","main");
    /*Append can take mutiple values */
    //   document.body.append(div); or document.body.append(div,division);

//Parent Child Element

//    var parent=document.createElement("div");
//    var child=document.createElement("div");
//    child.innerHTML="This is Child";
//    parent.append(child);
//    document.body.append(parent);


//Example
/*<div class="container">
    <div class="row">
        <div class="col"></div>
    </div>
</div>*/

    // var div=document.createElement("div");
    // var div1=document.createElement("div");
    // var div2=document.createElement("div");
    // div.setAttribute("class","container");
    // div1.setAttribute("class","row");
    // div2.setAttribute("class","col");
    // div1.append(div2);
    // div.append(div1);
    // document.body.append(div);


//Create Attribute

    //  var container=document.createElement("div");
    //  var attr=document.createAttribute("class");
    //  attr.value="main";
    //  container.setAttributeNode(attr);
    //  document.body.append(container);

//ClassName and ClassList

    /*var container=document.createElement("div");
    // container.className="main";
    container.classList.add("btn,btn-sec");
    document.body.append(container);*/

//email
/*function foo(){
var email=document.getElementById("mail").value;
console.log(email);
}*/