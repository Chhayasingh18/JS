const score = 400
//console.log(score);//400


const balance = new Number(100)//100% gurantee it will be no. only
//console.log(balance);//[Number: 100]
//console.log(balance.toString().length);//3
//console.log(balance.toFixed(2));//100.00
//console.log(balance.toFixed(3));//100.000

const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(3));//124 if that is 1123 than => 1.12e+3

const hundreds = 1000000
//console.log(hundreds.toLocaleString());//sometimes it is difficult to know the count of 0 so it puts , b/w them => 1,000,000
//console.log(hundreds.toLocaleString('en-In'));//accoridng to india=>10,00,000



// **********************************Maths**************************************

//it is object with many property its in-built in js
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//5 top value hi choose krega
// console.log(Math.floor(4.9));//4 lower value hi choose krega
// console.log(Math.min(4,3,6,8));//3
// console.log(Math.max(4,3,6,8));//8

//console.log(Math.random());//random values b/w 0 to 1
//console.log((Math.random()*10) + 1);//2.2579345936 //+1 is because value can be 0.03473843... to avoid this cases we have plus 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min) 













 