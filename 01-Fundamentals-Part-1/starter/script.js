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