/* 
#Primitive data types

7 types : String, Number, Boolean, null, undefined, Symbol(to make any value unique), BigInt(to handle big values)

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outsideTemp = null //empty not 0 //its type is null
let userEmail; //its value will be undeifned

const id = Symbol('123') 
const anotherId = Symbol('123')
console.log(id===anotherId); //false

const bigNumber = 34568854345876543347654n //BigInt
.
.
.
#Reference (Non primitive)

Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = { //its all object inside this curly braces
   name:"hitesh",
   age: 22,
}

const myFunction = function(){ //its data type is function object
    console.log("Hello world");
}

console.log(typeOf bigNumber) //to know datatype

https://262.ecma-international.org/5.1/#sec-11.4.3


****************************MEMORY*************************************************
STACK AND HEAP MEMORY

STACK:
in primitive stack memory is used
here we get copy of variable we declared

let youtubename = "chhayasinghdotcom"
let anothername = youtubename
anothername = "chairaurcode"
console.log(youtubename);//chhayasinghdotcom//as iska copy change hua tha original value nahi hui thi
console.log(anothername);//chaiorcode




*********************************************************************************
HEAP:
used in refernce/non primitive data type
here we get refrence of original valuee(if we change something it will change in original value)

let userone = {
    email = "chhayasingh3008@gmail.com",
    upi :"user@ybl"
}

let usertwo= userone

userTwo.email= "sonal@google.com//this is how we access object
console.log(userone.email);//sonal@gmail.com
console.log(usertwo.email);sonal@gmail.com







*/