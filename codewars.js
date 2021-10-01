// Century From Year
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// const century = function (year) {
//   let century = Math.ceil(year / 100);
//   return century;
// };

// console.log(century(1705));

/////////////// Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

// const basicOp = function (operation, value1, value2) {
//   if (operation === '+') {
//     return value1 + value2;
//   } else if (operation === '-') {
//     return value1 - value2;
//   } else if (operation === '*') {
//     return value1 * value2;
//   } else if (operation === '/') {
//     return value1 / value2;
//   }
// };

// console.log(basicOp('*', 4, 7));
