let score = "33abc"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.group(valueInNumber)
/*but its NaN(special type) not a number, this means dont rely on numbers, 
for score = null it will be 0 and 
for score = 33 it will be 33
for score = "33abc" it will be Nan,
for score = undefined it will be NaN,
for score = true it will be 1,
for score = false it will be 0,
for string....score = "chhaya" it will be NaN,
*/
 

let isLoggedIn = 1 //want to convert in boolean
/*
for:
"" => false
"chhaya" => true
0 => false
*/

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber)


// *****************************operationts********************************
let value = 3
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1 = "hello"
let str2 = " chhaya"

let str3 = str1 + str2
//console.log(str3);

//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1" + "2");
//console.log("1" + 2 + 2);
//console.log(1 + 2 + "2");

//console.log((3+4)*5%3); //use () to make it readable

//console.log(true);//true
//console.log(+true);//1
//console.log(true+);//error

let num1, num3, num4

num1 = num2 = num4 = 2 + 2 //there are better way than this to declare avriables

let gameCounter = 100
gameCounter++;//++gameCounter; see prefix and postfix
console.log(gameCounter);


















