//singleton
//Object.create

//object literals -> way to declare object

const mySym = Symbol("key1")

const JsUser = {
    name: "Chhaya",
    "full name": "Chhaya Singh",
    [mySym]: "mykey1",/*to use its ype as symbol u must write it as [mySym]
    if its is mySym: "mykey1" its aoutput is also like this mySym: 'mykey1' it is normal key which is like string
    but if we want to refer that symbol we use [] and its output will be [Symbol(key1)]: 'mykey1'
    */
    age: 18,
    location: "Kota",
    email: "sonal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
//console.log(JsUser["email"]);
//console.log(JsUser."full name")->this syntax not allowed so below is only allowed
// console.log(JsUser["full name"])
//console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) -> to lock values
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);//nochanges->hitesh@chatgpt.com

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//this. is to refrence same object than whatever property u want
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



