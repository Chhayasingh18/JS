let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.group(valueInNumber)/*but its NaN(special type) not a number, this means dont rely on numbers, 
for score = null it will be 0 and 
for score = 33 it will be 33
for score = "33abc" it will be Nan,
for score = undefined it will be NaN,
for score = true it will be 1,
for score = false it will be 0,
for string....score = "chhaya" it will be NaN,
*/ 

let isLoggedIn = 1 //want to convert in boolen
/*
for:
"" => false
"chhaya" => true
0 => false
*/
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
