// Immediately Invoked Function Expressions (IIFE)
//the function which get immediate executed
//global scope ke pollution se dikkat hoti kayi brr so jo bhi wha vairaible or declaration hai uske pollution ko htane ke liye use kiya

(function chai(){//named iife
    // named IIFE
    console.log(`DB CONNECTED`);
})();//chai() chai is to call function () is to execute it so instead of writing chai we have wrapped function in () and than used () to execute it

( (name) => {//unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')