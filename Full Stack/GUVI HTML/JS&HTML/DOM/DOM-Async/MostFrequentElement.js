var arr=[1,2,3,4,3,3,3,3,3,4,4,4,5,5,5];
var obj={};
var count=1;
var item;
for(var i=0;i<arr.length;i++){
     var ele=arr[i];
    if(obj[ele]){
        obj[ele]+=1;
    }
    else{
        obj[ele]=1;
    }
    if(obj[ele]>count){
        count=obj[ele];
        item=ele;
    }
}
console.log(item);