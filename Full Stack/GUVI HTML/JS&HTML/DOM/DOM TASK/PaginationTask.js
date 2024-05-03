/*async function fetchdata() {
   let url = `https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json`;
   let response = await fetch(url);
   let jsondata = await response.json();
   //console.log(jsondata);
  let body=document.querySelector('body');
   let currentpage=1;
   let dataperpage=5;
   function createbutton(){
      for(let i=1;i<=dataperpage;i++){
         var btn= document.createElement('button');
         btn.classList="btn-num";
         btn.innerHTML=i;
   }
   return btn;
   }
   
            
   function changePage(){
   let data=document.getElementById('data');
     body.addEventListener('click',function(e){
       if(currentpage<1){
         currentpage=1;
       }
       if(currentpage>totalpage()){
         currentpage=totalpage;
       }
       data.innerHTML="";
       for(let i=(currentpage-1)*dataperpage;i<currentpage*dataperpage;i++){
         data.innerHTML+=jsondata[i].id;
         data.innerHTML+=jsondata[i].name;
         data.innerHTML+=jsondata[i].email;
       }
});
 }
   function totalpage(){
      return Math.ceil(jsondata.length/dataperpage);
   }
   
   
   
   
   /*let btn = document.querySelector('button');
   let j = 0;
   let page=5;
   btn.addEventListener('click', function(e) {
       let currentpage = 2;
         // if(e.key==currentpage)
         for (let i = 0; i < 100; i++) {
            if (true) {
               id.innerHTML = jsondata[i].id;
               name.innerHTML = jsondata[i].name;
               email.innerHTML = jsondata[i].email;
               j++;
            }
            // page += 5;        
         }
      
   });*/

//}

//fetchdata();

let div = document.querySelector('.container')
//div.setAttribute('class','data');
let divBtn = document.querySelector('.btnDiv')
let data = document.querySelector('.data');
//let content=document.querySelector('.content');
// let divName=document.querySelector('.containerName')
// let divEmail=document.querySelector('.containerEmail')
// let prev=document.querySelector('.prev')
// let next=document.querySelector('.next')
let body = document.querySelector('body')
let currentPage = 1
let recordPerPage = 5

let prev = document.createElement('button')
prev.innerText = "prev"
divBtn.appendChild(prev)

let num1 = document.createElement('button')
num1.setAttribute('class', 'numBtn')
num1.setAttribute('value', 1)
num1.innerText = num1.value
divBtn.appendChild(num1)

let num2 = document.createElement('button')
num2.setAttribute('class', 'numBtn')
num2.setAttribute('value', 2)
num2.innerText = num2.value
divBtn.appendChild(num2)

let num3 = document.createElement('button')
num3.setAttribute('class', 'numBtn')
num3.setAttribute('value', 3)
num3.innerText = num3.value
divBtn.appendChild(num3)

let num4 = document.createElement('button')
num4.setAttribute('class', 'numBtn')
num4.setAttribute('value', 4)
num4.innerText = num4.value
divBtn.appendChild(num4)

let num5 = document.createElement('button')
num5.setAttribute('class', 'numBtn')
num5.setAttribute('value', 5)
num5.innerText = num5.value
divBtn.appendChild(num5)

let next = document.createElement('button')
next.innerText = "next"
divBtn.appendChild(next)




async function fetchData() {
    let url = `https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json`
    let response = await fetch(url)
    let jsonData = await response.json()
    // let jsonStr=(JSON.stringify(jsonData))
    // let jsonParse=JSON.parse(jsonStr)
    //     console.log(jsonData)
    //    return jsonStr

    let numBtn = document.querySelectorAll('.numBtn')
    for (let i = 0; i < numBtn.length; i++) {
        numBtn[i].addEventListener('click', function (e) {
            currentPage = numBtn[i].value
            //console.log(numBtn[i].value)
            changePage(numBtn[i].value)
        })
    }


    function previous() {
        if (currentPage > 1) {
            currentPage--;
            // console.log(currentPage)
            //changeNum(currentPage);
            changePage(currentPage);
        }
    }

    function nextPage() {
        if (currentPage < numOfPages()) {
            currentPage++;
            //console.log(currentPage)
            changePage(currentPage)
        }
    }




    function numOfPages() {
        return Math.ceil(jsonData.length / recordPerPage);
    }
    // console.log(Math.ceil(jsonData.length / recordPerPage))
    function changePage(page) {
        //     if (page < 1) page = 1;
        // if (page > numOfPages()) page = numOfPages();
        if (page < 1) page = 1;
        if (page > numOfPages()) page = numOfPages();
        currentPage = page
        // div.innerHTML = document.createElement('ul')
        // let ul=document.querySelector('ul')
        let divTag = document.createElement('div')
        divTag.setAttribute('class', 'data1');
        //divTag.innerHTML=""
        div.innerHTML = ""
        data.innerHTML = ""

        let id1 = document.createElement('div');
        let name1 = document.createElement('div');
        let email1 = document.createElement('div');
        id1.setAttribute('class', 'id1');
        name1.setAttribute('class', 'name1');
        email1.setAttribute('class', 'email1');

        let id2 = document.createElement('div');
        let name2 = document.createElement('div');
        let email2 = document.createElement('div');
        id2.setAttribute('class', 'id2');
        name2.setAttribute('class', 'name2');
        email2.setAttribute('class', 'email2');

        let id3 = document.createElement('div');
        let name3 = document.createElement('div');
        let email3 = document.createElement('div');
        id3.setAttribute('class', 'id3');
        name3.setAttribute('class', 'name3');
        email3.setAttribute('class', 'email3');

        let id4 = document.createElement('div');
        let name4 = document.createElement('div');
        let email4 = document.createElement('div');
        id4.setAttribute('class', 'id4');
        name4.setAttribute('class', 'name4');
        email4.setAttribute('class', 'email4');

        let id5 = document.createElement('div');
        let name5 = document.createElement('div');
        let email5 = document.createElement('div');
        id5.setAttribute('class', 'id5');
        name5.setAttribute('class', 'name5');
        email5.setAttribute('class', 'email5');






        let datadiv = document.createElement('div');
        datadiv.setAttribute('class', 'datarow')

        for (var i = (page - 1) * recordPerPage; i < (page * recordPerPage); i++) {
            for (var j = 0; j < 20; j++) {


                if (i == j) {
                    let divrow1 = document.createElement('div');
                    /*let id1=document.createElement('div');
                    let name1=document.createElement('div');
                    let email1=document.createElement('div');
                    id1.setAttribute('class','id1');
                    name1.setAttribute('class','name1');
                    email1.setAttribute('class','email1');*/
                    id1.innerHTML += jsonData[i].id;
                    name1.innerHTML += jsonData[i].name;
                    email1.innerHTML += jsonData[i].email;
                    //div1.innerHTML += jsonData[i].id+"   \t   "+jsonData[i].name +"     "+jsonData[i].email+ "<br>";
                    data.append(id1, name1, email1);
                    break;
                    //j++;
                }
                if (i == j) {
                    let divrow2 = document.createElement('div');
                    /*let id2=document.createElement('div');
                    let name2=document.createElement('div');
                    let email2=document.createElement('div');
                    id2.setAttribute('class','id2');
                    name2.setAttribute('class','name2');
                    email2.setAttribute('class','email2');*/
                    id2.innerHTML += jsonData[i].id;
                    name2.innerHTML += jsonData[i].name;
                    email2.innerHTML += jsonData[i].email;
                    //div1.innerHTML += jsonData[i].id+"   \t   "+jsonData[i].name +"     "+jsonData[i].email+ "<br>";
                    data.append(id2, name2, email2);
                    break;
                    //j++;
                }
                if (i == j) {
                    let divrow3 = document.createElement('div');
                    /*let id3=document.createElement('div');
                    let name3=document.createElement('div');
                    let email3=document.createElement('div');
                    id3.setAttribute('class','id3');
                    name3.setAttribute('class','name3');
                    email3.setAttribute('class','email3');*/
                    id3.innerHTML += jsonData[i].id;
                    name3.innerHTML += jsonData[i].name;
                    email3.innerHTML += jsonData[i].email;
                    //div1.innerHTML += jsonData[i].id+"   \t   "+jsonData[i].name +"     "+jsonData[i].email+ "<br>";
                    data.append(id3, name3, email3);

                    break;
                }
                if (i == j) {
                    let divrow4 = document.createElement('div');
                    /*let id4=document.createElement('div');
                    let name4=document.createElement('div');
                    let email4=document.createElement('div');
                    id4.setAttribute('class','id4');
                    name4.setAttribute('class','name4');
                    email4.setAttribute('class','email4');*/
                    id4.innerHTML += jsonData[i].id;
                    name4.innerHTML += jsonData[i].name;
                    email4.innerHTML += jsonData[i].email;
                    //div1.innerHTML += jsonData[i].id+"   \t   "+jsonData[i].name +"     "+jsonData[i].email+ "<br>";
                    data.append(id4, name4, email4);

                    break;
                }
                if (i == j) {
                    let divrow5 = document.createElement('div');
                    /*let id5=document.createElement('div');
                    let name5=document.createElement('div');
                    let email5=document.createElement('div');
                    id5.setAttribute('class','id5');
                    name5.setAttribute('class','name5');
                    email5.setAttribute('class','email5');*/
                    id5.innerHTML += jsonData[i].id;
                    name5.innerHTML += jsonData[i].name;
                    email5.innerHTML += jsonData[i].email;
                    //div1.innerHTML += jsonData[i].id+"   \t   "+jsonData[i].name +"     "+jsonData[i].email+ "<br>";
                    data.append(id5, name5, email5);
                     break;
                    //continue;
                }
            }
            // div1.setAttribute('class','row1');
            //divTag.innerHTML += jsonData[i].id+"   \t   "+jsonData[i].name +"     "+jsonData[i].email+ "<br>";

            // div1.innerHTML += jsonData[i].id+"   \t   "+jsonData[i].name +"     "+jsonData[i].email+ "<br>";
            //data.innerHTML += jsonData[i].id+"   \t   "+jsonData[i].name +"     "+jsonData[i].email+ "<br>";
            // id1.innerHTML+=jsonData[i].id;
            // name1.innerHTML+=jsonData[i].name;
            // email1.innerHTML+=jsonData[i].email;
            // console.log(i)
            // console.log("running")
            // console.log(id1);
            //data.append(datadiv);
        }
        //data.appendChild(divTag);
        //data.append(datadiv);

    }



    prev.addEventListener('click', function (e) {
        previous()
        // console.log(currentPage +"=="+(parseInt(num1.value)-1))
        if (parseInt(currentPage) == (parseInt(num1.value) - 1)) {
            // console.log(num1.value)
            changeNumPrev(currentPage)
        }

    })

    next.addEventListener('click', function (e) {
        nextPage()
        // console.log(currentPage+"=="+num5.value)
        if (parseInt(currentPage) == parseInt(num5.value) + 1) {
            // console.log("called")
            changeNumNxt(currentPage)
        }

    })
    function changeNumNxt(page) {
        // console.log(parseInt(page)+"=="+(parseInt(num5.value)+1))
        // console.log("called")

        // if(parseInt(page)==parseInt(num5.value)+1 && parseInt(page)<=numOfPages()){
        num1.value = parseInt(num1.value) + 1;
        //console.log(num1.value)
        num1.setAttribute('value', parseInt(num1.value))
        num1.innerText = num1.value
        //  console.log(num1.value)
        num2.value = parseInt(num2.value) + 1;
        // console.log(num2.value)
        num2.setAttribute('value', parseInt(num2.value))
        num2.innerText = num2.value

        num3.value = parseInt(num3.value) + 1;
        // console.log(num3.value)
        num3.setAttribute('value', parseInt(num3.value))
        num3.innerText = num3.value

        num4.value = parseInt(num4.value) + 1;
        // console.log(num4.value)
        num4.setAttribute('value', parseInt(num4.value))
        num4.innerText = num4.value

        num5.value = parseInt(num5.value) + 1;
        // console.log(num5.value)
        num5.setAttribute('value', parseInt(num5.value))
        num5.innerText = num5.value

        // console.log(parseInt(num5)+1)
        currentPage = parseInt(num5.value);
        // console.log(currentPage)

        changePage(currentPage)
        //}
    }

    function changeNumPrev(page) {
        // if(parseInt(page)==parseInt(num1.value) && parseInt(page)>1){

        console.log("called")
        console.log(num1.value)
        num1.value = (parseInt(num1.value) - 1);
        console.log(num1.value)
        num1.setAttribute('value', parseInt(num1.value))
        num1.innerText = num1.value

        num2.value = (parseInt(num2.value) - 1);
        console.log(num2.value)
        num2.setAttribute('value', parseInt(num2.value))
        num2.innerText = num2.value

        num3.value = (parseInt(num3.value) - 1);
        console.log(num3.value)
        num3.setAttribute('value', parseInt(num3.value))
        num3.innerText = num3.value

        num4.value = (parseInt(num4.value) - 1);
        console.log(num4.value)
        num4.setAttribute('value', parseInt(num4.value))
        num4.innerText = num4.value

        num5.value = (parseInt(num5.value) - 1);
        console.log(num5.value)
        num5.setAttribute('value', parseInt(num5.value))
        num5.innerText = num5.value

        currentPage = parseInt(num1.value)
        changePage(currentPage)
        // }
        // else{
        //     currentPage=parseInt(page)-1
        //     changePage(currentPage)
        // }
    }
    changePage(currentPage);
}
fetchData();

