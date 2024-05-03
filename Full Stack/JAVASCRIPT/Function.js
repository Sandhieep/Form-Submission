//traditional declaration
function sayHiTraditional(){
    console.log('hi from tradition')
}


//expression declaration
let sayHiExpression=function(){
    console.log('hi from expression')
}



//using arrow
let sayHiArrow=(para)=>{
    console.log('hi from'+para+'')
}


sayHiTraditional()
sayHiExpression()
sayHiArrow('Arrow')
