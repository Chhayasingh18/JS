const name="chhaya"
const repoCount = 50

//console.log(name + repoCount + "Value");//this syntax is not recommended, it is outdated chhaya50value

//string interpolation->will use back ticks``->placeholder bnaenge isme isse ${}

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('chhaya-singh-com')//another way to declare string by object way

//console.log(gameName[0]);//c
//console.log(gameName.__proto__);//{}

//console.log(gameName.length);//8
//console.log(gameName.toUpperCase());//CHHAYA SINGH //its doesnt change original value as its under stack and use copy of original
//console.log(gameName.charAt(3));//a
//console.log(gameName.indexOf('y'));//4

//const newString = gameName.substring(0, 4)//0 to n-1 characters will be separated //ye -v1 value ignore krdega it dont obey it
//console.log(newString);//chha

//const anotherStrings = gameName.slice(-12, 4)//chha
//console.log(anotherStrings);

const newStringOne = "   hitesh   "
//console.log(newStringOne);//   hitesh   
//console.log(newStringOne.trim());//hitesh, it works on white space charachters plus line terminator /n character

const url ="https://chhaya.com/chhaya%20singh"//browser dont understand spaces so it replaces space in browser name "chhaya singh" to "chhaya%20singh" 

//console.log(url.replace('%20','-'));//https://chhaya.com/chhaya-singh

//console.log(url.includes('chhaya'));//true

console.log(gameName.split('-'));//[ 'chhaya', 'singh', 'com' ] splitted based on - in input




 












