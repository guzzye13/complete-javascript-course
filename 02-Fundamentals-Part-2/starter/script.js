// // Activating Strict mode 
// // makes it easier to write secure JS code and must write at beginning of script 
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = 'true';
// if(hasDriversLicense) console.log('test');

// // const interface = 'Audio';
// // const private = 534;




// **** Functions.  ***
// Function - it is a piece of code that we can reuse over and over again. It performs a task or calculates a value.
// we can also pass data and have it return data back
// function logger(){
//     console.log('My name is Eddy');
// }
// // calling/running/ invoking functions
// logger();
// logger();

// // Parameters - are like variables but are specific to functions
// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`; // template literal
//     return juice;
// }
// // actual values of parameters are called arguments 
// // In order to display template literal you need to place function as a variable and call it as console.log()
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num);


// **** Functions vs Expressions ***
// Function Declaration = use keyword function to declare a function and can be called at any time such as before the function is made 
// Functions are values therefore we can call values
function calcAge1(birthYear){
    return 2037 - birthYear;
}

// call/invoke/execute function 
const age1 = calcAge1(1991);
console.log(age1);


// example of expression - instead of calcAge1 name it is a function without a name and still define parameters and function body
// must be called after the expression cannot call it before defining function
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);