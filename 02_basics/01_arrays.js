//Array

const myArr = [0, 1, 2, 3, 4, 5] //js arryas are resizable and can contain mixed datatypes

const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)

//console.log(myArr[0]);

//Array methods

// myArr.push(6) //add values to array 
// myArr.push(7)
// myArr.pop()//remove last value
// console.log(myArr);

//myArr.unshift(9) //insert at starting so for it all other element need to shift to next position what if there are 1000 elements it will be too time consuming
//myArr.shift()//jo 9 dala tha isne usse remove krdia

// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(3));//2

// const newArr = myArr.join()//add all element of array into the string

// console.log(myArr);//[ 0,1,2,3,4,5]
// console.log(newArr);//0,1,2,3,4,5

// console.log(typeof newArr);

// SLICE, SPLICE

console.log("A ",myArr);//A  [ 0, 1, 2, 3, 4, 5 ] //original array

const myn1 = myArr.slice(1, 3)//[ 1, 2 ] //it doesnt manipulate original array

console.log(myn1);
console.log("B ",myArr);//B  [ 0, 1, 2, 3, 4, 5 ] //slice use krra

const myn2 = myArr.splice(1, 3)//[ 1, 2, 3 ] //it manipulate original array
console.log("C ",myArr);//splice use krra C  [ 0, 4, 5 ]
console.log(myn2);//[ 1, 2, 3 ]










