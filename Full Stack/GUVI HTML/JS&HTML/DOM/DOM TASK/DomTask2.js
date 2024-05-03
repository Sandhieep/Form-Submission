function tablecreate(tagname,attrname,attrvalue){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    return ele;
}
function headcreate(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
function trcreate(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
function thcreate(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function bodycreate(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
function tdcreate(tagname,content){
    var ele=document.createElement(tagname);
    ele.innerHTML=content;
    return ele;
}
function spacecreate(tagname){
    var ele=document.createComment(tagname);
    return ele;
}
var table=tablecreate("table","class","table");
var head=headcreate("thead");
var tr1=trcreate("tr");
var th1=thcreate("th","scope","col","First");
var nb1=spacecreate("&nbsp;");
var th2=thcreate("th","scope","col","Second");
var nb2=spacecreate("&nbsp;");
var th3=thcreate("th","scope","col","Third");
var body=bodycreate("tbody");
var tr2=trcreate("tr");
var td1=tdcreate("td","Mark");
var nb3=spacecreate("&nbsp;");
var td2=tdcreate("td","Otto");
var nb4=spacecreate("&nbsp;");
var td3=tdcreate("td","@mdo");
//document.body.append(table,head,tr1,th1,nb1,th2,nb2,th3,body,tr2,td1,nb3,td2,nb4,td3);

table.append(head);
head.append(tr1);
tr1.append(th1,th2,th3);
body.append(tr2);
tr2.append(td1,td2,td3);
table.append(head,body);
document.body.append(table);
