function labelcreate(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function linebreaker(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
function inputele(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function buttonele(tagname,attrname,attrvalue,attrname1,attrvalue1){
  var ele=document.createElement(tagname);
  ele.setAttribute(attrname,attrvalue);
//   ele.innerHTML=content;
ele.setAttribute(attrname1,attrvalue1);
  return ele;
}
var fname=labelcreate("label","for","firstname","FirstName");
var br1=linebreaker("br");
var fnameinput=inputele("input","type","text","id","fname");
var br2=linebreaker("br");
var mname=labelcreate("label","for","middlename","MiddleName");
var br3=linebreaker("br");
var mnameinput=inputele("input","type","text","id","mname");
var br4=linebreaker("br");
var lname=labelcreate("label","for","lastname","LastName");
var br5=linebreaker("br");
var lnameinput=inputele("input","type","text","id","lname");
var br6=linebreaker("br");
var email=labelcreate("label","for","email","Email");
var br7=linebreaker("br");
var emailinput=inputele("input","type","email","id","email");
var br8=linebreaker("br");
var state=labelcreate("label","for","state","State");
var br9=linebreaker("br");
var stateinput=inputele("input","type","text","id","State");
var br10=linebreaker("br");
// var button=labelcreate("label","for","button","submit");
// var br11=linebreaker("br");
var buttoninput=buttonele("input","type","button","text","submit");
var br11=linebreaker("br");
document.body.append(fname,br1,fnameinput,br2,mname,br3,mnameinput,br4,lname,br5,lnameinput,br6,email,br7,emailinput,br8,state,br9,stateinput,br10,buttoninput,br11);