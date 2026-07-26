const user = {
    username: "chhaya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);//current values ki baat krta hai
        
        
    }//this is to refer cuurent context jo bhi iss scope mai variable to access them
    
}

// user.welcomeMessage()   //chhaya , welcome to website
// user.username = "sam"   
// user.welcomeMessage()  //sam , welcome to website

//console.log(this);//now there is n context in global so {}

// function chai(){
//     let username = "hitesh"
//     console.log(this);//jb ek function ke andr krte toh wha toh bhot saari values atti hai
//     console.log(this.username);//undefined...function ke andr nhi use kr parhe isko object ke andr hi krna pdega
    
    
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);//undefined
//     console.log(this);//undefined
    
// }

//chai()


// const addTwo = (num1,num2) => {
//     return num1 + num2 //EXPLICIT RETURN
// }
// console.log(addTwo(3,4));//7

//IMPLICIT RETURN (MAI MANLETS HU KI RETURN KEYWORD LIKHNE KI JARURAT NAHI)

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)//if wrapped in {} than return key word needed...but not in ()

// console.log(addTwo(3,4));//7


const addTwo = (num1,num2) => ({ username:"hitesh"})

console.log(addTwo(3,4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
