// // TypeError: date.getTime is not a function in JavaScript

// // EXAMPLE 1 - Only call the `getTime()` method on valid Date objects

// const t1 = new Date().getTime();
// console.log(t1); // 👉️ 1639...

// const t2 = new Date('Sept 24, 22 13:20:18').getTime();
// console.log(t2); // 👉️ 166401...

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is a `Date` before calling `getTime()`

// const d1 = new Date();

// if (typeof d1 === 'object' && d1 !== null && 'getTime' in d1) {
//   const result = d1.getTime();
//   console.log(result); // 👉️ 163966...
// }

// ------------------------------------------------------------------

// EXAMPLE 3 - using setTime()

const date = new Date();
console.log(date); // 👉️ 2023-07-26T16:09:50.481Z

const dateCopy = new Date();
dateCopy.setTime(date.getTime());

console.log(dateCopy); // 👉️ 2023-07-26T16:09:50.481Z
