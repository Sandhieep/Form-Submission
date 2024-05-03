//FUNTION PROTOTYPE
/*function person(name,age){
    this.name=name
    this.age=age

    this.sayHello = function(){  // It is Object....We can create multiple objects with the use of prototype(chrome console)
        console.log('Hello')
    }; 
}
let user=new person('john',25)    // user is an object
console.log(user)
console.log(user.sayHello())*/

//CLASS PROTOTYPE
/*class person{
    constructor(name,age){      //constructor
        this.name=name
        this.age=age
    }
}
let user=new person('john',23)     // user is an object
let user1=new person('vijay',45)
//It can call new instance of an object according to the user called object
console.log(user1) */

/*class person{
    constructor(name,age){      
        this.name=name
        this.age=age
    }
}
//another method of create an object
let user=Object.create(person) 
user.age=15
user.salary=10000
console.log(user)*/

//STUDENT DETAILS
/*class Student{
    constructor(name,age,mobile,address){
        this.name=name
        this.age=age
        this.mobile=mobile
        this.address=address
    
    }
}
function addStudent(){
    //get the student details
    let name='john'
    let age=25
    let mobile='9874733633'
    let address='chennai'

    //create an object
    let object=new Student(name,age,mobile,address)

    //push the details to the array
    return object
}
let students=[];
students.push(addStudent())
console.log(students);*/

//INHERITANCE

class Student{
    constructor(name,age,mobile,address){
        this.name=name
        this.age=age
        this.mobile=mobile
        this.address=address
    
    }
}

class weekendStudent extends Student{
    constructor(name,age,mobile,address,hours){
        super(name,age,mobile,address)
        this.hours=hours
    } 
}

let name='john'
let age=25
let mobile='9874733633'
let address='chennai'
let hours=5

let john=new weekendStudent(name,age,mobile,address,hours)
console.log(john)