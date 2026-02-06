/* Values and Variables
      let js = 'amazing';
      console.log(40+8+23-10);

      console.log('Jonas');
      console.log(23);

      let firstName = "Matilda";

      console.log(firstName);
      console.log(firstName);
      console.log(firstName);

      // Variable name conventions
      let jonas_matilda = "JM";
      let $function = 27;

      let person = 'jonas';
      let PI = 3.1415;

      let myFirstJob = 'Coder';
      let myCurrentJob = 'Teacher';

      let job1 = 'programmer';
      let job2 = 'teacher';

      console.log(myFirstJob);
*/

/* Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun)
//console.log(typeof 23)
//console.log(typeof 'Jonas')

javascriptIsFun = 'YES!'; // example of dynamic typing
console.log(typeof javascriptIsFun)

let year; // example of undefined 
console.log(year)
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31; 

const birthYear = 1991;
//birthYear = 1990;

var job = 'programmer';
job = 'teacher';

lastName = 'Guzman';
console.log(lastName);
*/

/* Basic Operators 
// Math Operators  
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah,);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// Concatenation of strings 
const firstName = 'Jonas';
const lastName = 'Guzman';
console.log(firstName + ' ' + lastName); 

// Assignment Operators 
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // 25 * 4 = 100
x++; // 100 + 1 = 101 
x--; // 101 - 1 = 100 
x--; // 100 - 1 = 99
console.log(x);

// Comparison Operators 
console.log(ageJonas > ageSarah);// >, <, >=, <= 
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/* Operator Precedence
const now = 2037;
const ageJonas = now - 1991; // 46
const ageSarah = now - 2018; // 19

console.log(now - 1991 > now - 2018);

console.log(25-10-5); // example of left to right execution

let x, y;
x = y = 25 - 10 - 5; // example of right to left execution 
// x = y = 10, x = 10
console.log(x,y);

// without parentheses then the averageAge would be wrong due to operator precedence
// Grouping () is highest precedence
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/


/**
// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm "+ firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

// Example of Template Literals
const jonasNew = `I'm ${firstName}, a ${(year-birthYear)} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

// multi-line strings
console.log('String with \n\
multiple \n\
lines');

// Template Strings
console.log(`String
multiple
lines`);
*/


/*
// If/Else Statements 
// IF ELSE control structure 
const age = 15;

if(age >= 18){
      console.log('Sarah can start driving license 😀');
} else {
      const yearsLeft = 18 - age;
      console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;

let century; // variable 
if(birthYear <= 2000){ // This is the condition - anything that returns a true or false value
      // Anything inside is a code block
      century = 20;
} else {
      century = 21;
}
console.log(century);
*/ 


/** 
// Type Conversion and Coercion
// type conversion is manually converting
// type coercion is automatic converting 

// All examples of conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18); // adds number with number
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);// cannot add string with number

console.log(Number('Jonas')); // returns NaN (not a number)
console.log(typeof NaN) // this returns a number but it is because its an invalid number 

console.log(String(23), 23);


// All examples of coercion 
console.log('I am ' + 23 + ' years old.'); // "+" operator converts to string
console.log('23' - '10' - 3); // - operator converts to numbers
console.log('23' * '2'); // - operator converts to numbers

let n = '1' + 1; // 1 + 1 -> 11 converted to string
n = n - 1; // converts to number -> 11 - 1 = 10
console.log(n);
*/

/**
// Truth and Falsy Values 
//  * Falsy values are values that are not exactly false but will become false when done in boolean 
//  * 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 100;
if(money){
      console.log(`Don't spend it all`);
} else {
      console.log('You should get a job');
}

let height = 10;
if (height){
      console.log('Yay height is defined');
} else {
      console.log('Height is not defined');
}
*/


/** 
// Equality Operators: == vs ===
const age = 18;
// === is a strict operator and only returns true when operators are the same
if(age === 18) console.log('You just became an adult (Strict)');
// '18' == 18 => true
// '18' === 18 => false
// Avoid Loose and use strict operator instead, it is a good rule
if(age == 18) console.log('You just became an adult (Loose)');

// converting string to number
const favorite = Number (prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof favorite)

if(favorite === 23){
      console.log("Cool, 23 is an amazing number");
} else if(favorite === 7){
      console.log('7 is also a cool number')
} else if(favorite === 9 ){
      console.log('9 is also a cool number');
} 
else {
      console.log('Number is not 23 or 7 or 9');
}

// !== strict version but always use the strict version
// != loose version
if(favorite !== 23) console.log("Why not 23?")
*/


/**
// Boolean Logic
// And, Or, and Not Operators
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive){
      console.log('Sarah is able to drive!')
} else {
      console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision || !isTired){
      console.log('Sarah is able to drive!')
} else {
      console.log('Someone else should drive...');
}
*/


// // Switch statement 
// const day = 'thursday';

// switch(day){
//       case 'monday': 
//             console.log('Plan course structure');
//             console.log('Go to coding meetup');
//             break;
//       case 'tuesday':
//             console.log('Prepare theory videos');
//             break;
//       case 'wednesday':
//       case 'thursday':
//             console.log('Write code examples');
//             break;
//       case 'friday':
//             console.log('Record videos');
//             break;
//       case 'saturday':
//       case 'sunday':
//             console.log('Enjoy the weekend');
//             break;
//       default:
//             console.log('Not a valid day!');
// }

// if(day === 'monday'){
//       console.log('Plan course structure');
//       console.log('Go to coding meetup');
// } else if (day === 'tuesday'){
//     console.log('Prepare theory videos');  
// } else if(day === 'wednesday' || day === 'thursday'){
//       console.log('Write code examples'); 
// } else if(day === 'friday'){
//       console.log('Record videos');
// }
// else if(day=== 'saturday' || day ==='sunday'){
//       console.log('Enjoy the weekend');
// } else {
//       console.log('Not a valid day!');

// }



// Statements and Expressions
// expression a piece of code that produces value 3 + 4
// anything that ends with ; is a statement 