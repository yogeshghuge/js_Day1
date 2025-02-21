// Primitive

// & types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const socrwValue = 100.5


const isLoggedIn= false
const outSideTemp=null;
let userEmail;

const id=Symbol('123')
const anotherId= Symbol('123')

//console.log(id== anotherId); //  output will be false


// const bigNumber=4567895123114n // bigInt datatypes


// Reference (Not Primitive)

// Array, Objects, Functions

const arr=["Ram","Lakan","Kunal"];
let myObj= {
    name:"Yogesh",
    age: 21,
}

const myFunction =function(){
    //console.log("Hello World!");

}

//console.log(typeof anotherId);


//********************************************** */


// Stack (Primitive),    Heap(Non-Primitive)

let myName= "Yogesh Ghuge"

let anothername=myName
anothername= "chaiaurcode"

console.log(myName);
console.log(anothername);

let userOne= {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo= userOne

userTwo.email= "com@google.com"

console.log(userOne.email);
console.log(userTwo.email);
