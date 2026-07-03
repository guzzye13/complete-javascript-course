// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// // PROBLEM 1:
// // We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, , -6, , -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // 1) Understanding the problem
// // - What is temp amplitude Ans: Difference between the highest and lowest temp
// // - How to compute the max and min temperatures?
// // - What's a sensor error? And what to do?

// // 2) Breaking into sub-problems
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find mind value in temp array
// // - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     // if array is not a number then move on
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// //PROBLEM 2:
// // Function should now receive 2 arrays of temperatures

// // 1) Understanding the problem
// // - With 2 arrays, should we implement functionality twice? No, just merge two arrays

// // 2) Breaking into sub-problems
// // - How to merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     // if array is not a number then move on
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

/*

DEBUGGING EXAMPLE



*/
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'cels',
//     // C) Fix
//     value: Number(prompt('Degrees celsius:')),
//   };
//   // B) FIND BUG
//   console.table(measurement);
//   //console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// Coding Challenge #1
/*
Given an array of forecasted maximum temperatures, 
the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "...17 in 1 days...21 in 2 days.. 23 in 3 days"
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems
Test data1: [17,21,23]
Test data2: [12, 5. -5, 0, 4]
*/

// 1) Understanding the problem
// - Array transformed to string, separate by ...
// - What is the X days? Ans: index+1

// 2) Breaking into sub-problems
// - Transform this array into string
// - Transform each element to string with Celcius
// - String needs to contain day (index+1)
// - Add ... between elements and start and end of string

// const data1 = [17,21,23];
// const data2 = [12, 5. -5, 0, 4];

// const printForecast = function(arr){
//   let str = '';
//   for(let i = 0; i<arr.length; i++){
//     str += `${arr[i]} in ${i+1} days ... `;
//   }
//   console.log('...' + str);
// };

// printForecast(data1);

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

// Written by ChatGPT
function analyzeWorkWeek(dailyHours) {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Validate that the input array has exactly 7 elements
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error('Input must be an array of exactly 7 daily work hours.');
  }

  // Calculate total hours worked
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  // Calculate average daily hours, rounded to one decimal place
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  // Find the day with the most hours worked
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const maxDay = daysOfWeek[maxDayIndex]; // Convert index to day name

  // Count the number of days worked
  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  // Check if the week was full-time (35 hours or more)
  const isFullTime = totalHours >= 35;

  // Return the result object
  return {
    totalHours,
    averageHours,
    maxDay, // The name of the day with the most hours
    daysWorked,
    isFullTime,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);

const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5];
const analysis2 = analyzeWorkWeek(weeklyHours2);
console.log(analysis2);
