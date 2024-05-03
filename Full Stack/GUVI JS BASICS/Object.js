let person = {
    name : 'Abd',
    age : 17,
    game : 'cricketer',
    skills: {
        Programming:'C++',
        Other : 'typewriting'
    }
};
/*console.log(person);
person.age=25;
console.log(person);
console.log(Object.keys(person));  //-->Display all keys in the object
console.log(Object.values(person)); //-->Display all values in the object
console.log(Object.entries(person)) //-->Display both key and value in the object
console.log(Object.keys(person.skills));*/

//LOOP IN OBJECTS
/*for(let key in person){
    console.log(key ,':', person[key]); //-->person[key] -- It is only way to print the string in the loop 
    }                                   //                  because In the loop key is taken as String
 
for(let key of Object.keys(person)){    // Another method
    console.log(key ,':', person[key]);
}

for(let value of Object.values(person)){ // Another method of display only values
    console.log(value);
}

for(let entry of Object.entries(person)){ // display as entry..example:name krish
    console.log(entry[0],':',entry[1]);  // (key,value)
}

for(let [key,value] of Object.entries(person)){  // display as key,value...destructuring                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    console.log(key,':',value);  // (key,value)
}*/

//Object Function
/*let user = {
      name :'sandhieep',
      about: function(){
        console.log(`Hi ${this.name}`)
     }
}
// console.log(user.name)
user.about();

console.log(JSON.stringify(user))      //convert object to string
console.log(JSON.parse(user))*/        //convert string to object

/*function createfunction(name){
    return{
            name : name,
            about: function(){
              console.log(`Hi ${this.name}`)
           }
      }
    }
let user = createfunction('sandhieep');
user.about()*/


//Spread
/*let object={name:'mano',age:'15'}
//let copy=object                      // reference copy
let copy={...object}
//copy.salary=1000
console.log(object)
console.log(copy)*/

//Rest
// function add(...numbers){             // rest spread
//     let sum=0
//     for(let num of numbers){
//         sum+=num
//     }
//      /*console.log(x)
//      console.log(y)
//      return x+y*/
//      return sum
// }
// console.log(add(5,7,6))

/*let object={
    name:'mano',
    age:'15'
}
let {name,age}=object
console.log(name,age)*/