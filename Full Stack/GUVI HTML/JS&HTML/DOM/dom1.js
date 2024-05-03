function labelcreate(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
// labelcreate("div","class","main","This is div");

//line breaker
function linebreaker(tagname){
    var ele=document.createElement(tagname);
    return ele;
}

//input elements
function inputele(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}

var email=labelcreate("label","for","email","Email");
var br1=linebreaker("br");
var emailinput=inputele("input","type","email","id","main");
var br2=linebreaker("br");
document.body.append(email,br1,emailinput,br2);