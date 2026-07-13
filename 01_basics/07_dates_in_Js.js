let myDate = new Date()
// console.log(myDate);//2026-07-13T17:35:57.818Z
// console.log(myDate.toString());//Mon Jul 13 2026 17:36:48 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Mon Jul 13 2026
// console.log(myDate.toLocaleString());// 7/13/2026, 5:38:45 PM
// console.log(typeof myDate);// object

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());//1/23/2023, 5:03:00 AM

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})






