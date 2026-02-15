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
// // Function Declaration = use keyword function to declare a function and can be called at any time such as before the function is made 
// // Functions are values therefore we can call values
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }

// // call/invoke/execute function 
// const age1 = calcAge1(1991);
// console.log(age1);


// // example of function expression - instead of calcAge1 name it is a function without a name and still define parameters and function body
// // must be called after the expression cannot call it before defining function
// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);



// //**** Arrow Functions *******/
// // Third type of function -> a special form of function expression that is shorter and faster to write 
// // Arrow Function 
// // return happens implicitly 
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037-birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Eddy Guzman'));
// console.log(yearsUntilRetirement(1998, 'Airpods'));



// //****** Functions Calling Other Functions ******/
// function cutFruitPieces(fruit){
//     return fruit * 3;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`; 
//     // template literal
//     return juice;
// }
// console.log(fruitProcessor(2,3));



/**
 * Reviewing Functions
 * Function declaration - Function that be used before its declared
 * Function expression - Essentially a function value stored in a variable
 * Arrow function - Great for a quick one-line functions. Has no this keyword.
 * Three different ways of writing functions, but they all work in a similar way: receive input data, transform data, and then output data.
*/
// local variable to each function
const calcAge = function(birthYear){
    return 2037 - birthYear;
}

// /**
//  * yearsUntilRetirement is the function name
//  * @param {*} birthYear is a parameter: placeholders to receive input values. Like local variables of a function.
//  * @param {*} firstName 
//  * @returns 
//  */
// const yearsUntilRetirement = function (birthYear, firstName){
//     // Arguments: actual values of function parameters to input data.
//     // Calling running or invoking the function using()
//     // "age" Variable to save returned value (function output)
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement>0){
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement; // to output a value from the function and terminate execution.
//     }
//     else{
//         console.log(`${firstName} has alaready retired.`);
//         return -1;

//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1970, 'Mike'));

// Challenge #1
function calcAverage(firstScore, secondScore, thirdScore){
    const calcScore = (firstScore+secondScore+thirdScore) / 3;
    return calcScore;
}

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= (avgKoalas*2)){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    }
    else if(avgKoalas >= (avgDolphins * 2)){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else 
    {
        console.log('No teams...')
    }
}

const scoreDolphins = calcAverage(85,54,41);
const scoreKoalas = calcAverage(23,34,27);
const checkGameWinner = checkWinner(scoreDolphins, scoreKoalas)

console.log(checkGameWinner);
