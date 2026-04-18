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
// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

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

// // Challenge #1
// function calcAverage(firstScore, secondScore, thirdScore){
//     const calcScore = (firstScore+secondScore+thirdScore) / 3;
//     return calcScore;
// }

// function checkWinner(avgDolphins, avgKoalas){
//     if(avgDolphins >= (avgKoalas*2)){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     }
//     else if(avgKoalas >= (avgDolphins * 2)){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//     } else 
//     {
//         console.log('No teams...')
//     }
// }

// const scoreDolphins = calcAverage(85,54,41);
// const scoreKoalas = calcAverage(23,34,27);
// const checkGameWinner = checkWinner(scoreDolphins, scoreKoalas)

// console.log(checkGameWinner);


// /**
//  * Introduction to arrays
//  */
// // Important data structures are arrays and objects
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length) // length is not zero-based
// // Inside the square brackets, JS expects a expression not an statement
// // expression produces a value 
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// // Only primitative values are immutable 
// // Array is not a primitative values so we can change those const values

// const firstName = 'Jonas'
// const jonas = [ firstName, 'Test', 2037-1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const yearsTest = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(yearsTest[0]);
// const age2 = calcAge(yearsTest[1])
// const age3 = calcAge(yearsTest[yearsTest.length-1])
// console.log(age1, age2, age3);

// const ages = [calcAge(yearsTest[0]), calcAge(yearsTest[1]), calcAge(yearsTest[yearsTest.length-1])];

// console.log(ages);


// /**
//  * Basic Array Operations (Methods)
//  * Methods are functions that are attached to objects. They are used to perform operations on data. 
//  * Array methods are functions that are attached to arrays and can be used to manipulate arrays.
//  * push() - adds elements to the end of an array
//  * unshift() - adds elements to the beginning of an array
//  * pop() - removes the last element of an array
//  * shift() - removes the first element of an array
//  * indexOf() - returns the index of the first occurrence of a value in an array
//  * includes() - returns true if an array contains a value, false otherwise  
//  */
// const friends = ['Michael', 'Steven', 'Peter'];

// const newLength = friends.push('Jay'); // adds to the end of the array 
// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); // adds to the beginning of the array
// console.log(friends);


// //Remove elements
// friends.pop(); // removes last 
// const popped = friends.pop()
// console.log(popped);
// console.log(friends);

// friends.shift(); // removes first
// console.log(friends);

// console.log(friends.indexOf('Steven')); // returns position of index

// // returns true if element is in the array
// friends.push('23');
// console.log(friends.includes('Steven')); // true
// console.log(friends.includes('Bob')); // false
// console.log(friends.includes('23')); // false

// if(friends.includes('Steven')){
//     console.log('You have a friend called Peter');
// } else {
//     console.log('No friend ')
// }

// // Code Challenge #2
// function calcTip(billValue){
//     if(billValue >= 50 && billValue <=300){
//         return billValue * 0.15;
//     } else {
//         return billValue * 0.20;
//     }
// }
// const bills = [125, 555, 44];
// const tips = [
//     calcTip(bills[0]),
//     calcTip(bills[1]),
//     calcTip(bills[2]),
// ];
// console.log(tips);

// const totals = [
//     (bills[0] + tips[0]),
//     (bills[1] + tips[1]),
//     (bills[2] + tips[2]),
// ]
// console.log(totals);


// // *** Introduction to Objects ***
// // [] is used for arrays
// const jonasArray = [
//     'Jonas', 
//     'Schmedtmann', 
//     2037-1991, 
//     'teacher', 
//     ['Micahel', 'Peter', 'Steven']
// ];

// // {} is used for objects
// // use objects to group together diff variables that belong together
// // Difference between objects and arrays:
// // Order of values does not matter when we want to retrieve them
// // in arrays order of values matter
// // use arrays for more order data and objects for more unstructured data 
// const jonas ={
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: "teacher",
//     friends:  ['Micahel', 'Peter', 'Steven']
// }

// console.log(jonasArray)
// console.log(jonas);


// /***
//  * Dot vs Bracket Notation 
//  */
// const jonas ={
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: "teacher",
//     friends:  ['Micahel', 'Peter', 'Steven']
// }
// console.log(jonas);
// // When we need to compute property name then use bracket notation 
// // but in other cases use the dot notation
// console.log(jonas.lastName)
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// // if(jonas[interestedIn]){
// //     console.log(jonas[interestedIn]); // user input is stored in interestedIn
// // } else {
// //     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// // }

// // how to use dot and bracket to add new properties 
// jonas.location = 'Portugal';
// jonas['twitter'] = 'jonas@schedulfe';
// console.log(jonas);

// // Challenege
// // "Jonas has 3 friends and his bestfriend is called Michael"
// // do not hard code jonas, 3, and michael
// console.log(`${jonas.firstName} has ${jonas.friends.length}, and his bestfriend is called ${jonas.friends[0]}`);


// /**
//  * Object Methods
//  * We can add function to objects
//  * Any function that is attached to an object is called a method
//  * ex: this.propertyValue
//  * Arrays are also objects and can be used to manipulate like push() and which is why they can have methods 
//  */
// const jonas = {
//     firstName:"Jonas",
//     lastName:"Schemdt",
//     birth: 1991,
//     job: "Worker",
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriveLicense: true,

//     // calcAge: function(){
//     //     console.log(this);
//     //     return 2037-this.birth;
//     // }
//     calcAge: function(){
//         this.age = 2037 - this.birth;
//         return this.age;
//     },

//     getSummary: function(){
//         // if true then return a if not no
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriveLicense ? 'a' :'no'} driver's license`
//     }
// };

//console.log(jonas.calcAge());
// console.log(jonas.age)
// console.log(jonas.getSummary());

// // Challenge:
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function(){
//         this.bmi = this.mass/(this.height * this.height);
//         return this.bmi
//     }
// }
// const john = {
//     fullName: 'John',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass/(this.height * this.height)
//         return this.bmi
//     }
// }
// john.calcBMI();
// mark.calcBMI();

// if(john.bmi > mark.bmi){
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
// } else (john.bmi < mark.bmi)
// {
//         console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// }

// // console.log(john)
// // console.log(john.bmi);

// /**
//  * Iteration: The for loop 
//  */
// // for loop keeps running whle condition is true
// for(let rep=1; rep<=10;rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
// }



/**
//  * Looping arrays, breaking and continuing 
//  */
// const jonas = [
//     'Jonas',
//     'Schmedt', 
//     2036-1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// const types = [];

// /**
//  * console.log(jonas[0])
//  * console.log(jonas[1])
//  * ...
//  * console.log(jonas[4])
//  * console.log(jonas[5]) does not exist 
//  */

// for(let i = 0; i < jonas.length; i++){
//     // reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     // filling types array 
//     // types[i] = typeof jonas[i]
//     types.push(typeof jonas[i])
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//     ages[i] = 2037-years[i];
// }
// console.log(ages);

// // continue and break 
// console.log('--- ONLY STRINGS ---')
// for(let i = 0; i < jonas.length; i++){
//     if(typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i])
// }

// // break example
// console.log('--- BREAK WITH NUMBER ---')
// for(let i = 0; i < jonas.length; i++){
//     if(typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i])
// }





// /**
//  * Looping Backwards and Loops in Loops
//  */
// const jonas = [
//     'Jonas',
//     'Schmedt',
//     2037-1991,
//     ['Michael', 'Peter', 'Steven']
// ];

// // 4, 3, ..., 0 (looping backwards)
// for(let i = jonas.length - 1; i >= 0; i--){
//     console.log(i, jonas[i]);   
// }

// // loop inside a loop example 
// for (let exercise = 1; exercise < 4; exercise++){
//     console.log(`-----Starting exercise ${exercise}------`);
//     for (let rep = 1; rep < 6; rep++){
//         console.log(`Lifting weight repetition ${rep}`)
//     }
// }



/**
 * The while loop
 */

    // for (let rep = 1; rep <= 10; rep++){
    //     console.log(`Lifting weight repetition ${rep}`);
    // }

    // let rep = 1;
    // while(rep <= 10 ){
    //     //console.log(`WHILE: Lifting weight repetition ${rep}`);
    //     rep++;
    // }

    // let dice = Math.trunc(Math.random() * 6) + 1;

    // while(dice !==6 ){
    //     console.log(`You rolled a ${dice}`);
    //     dice = Math.trunc(Math.random() * 6) + 1;
    //     if(dice === 6) console.log('Loop is about to end...')
    // } 

    const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    const tips = [];
    const totals = [];

    function calcTip(billValue){
    if(billValue >= 50 && billValue <=300){
        return billValue * 0.15;
    } else {
        return billValue * 0.20;
    }
}
    for(let i = 0; i < bills.length; i++){
        const tip = calcTip(bills[i]);
        tips.push(tip);
        totals.push(bills[i] + tip);
    }

    console.log(bills, tips, totals);

    const calcAverage = function(arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
          //  sum = sum + arr[i];
        sum += arr[i];
        }
        return sum / arr.length;
    } 
    console.log(calcAverage([2,3,6]));
    console.log(calcAverage(totals));
    console.log(calcAverage(tips));