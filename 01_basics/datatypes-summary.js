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

*/