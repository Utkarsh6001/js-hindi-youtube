//Dates

let myDate = new Date();
console.log(myDate); // Current date and time
console.log(myDate.toString()); // Date as a string
console.log(myDate.toLocaleString()); // Date in locale format
console.log(typeof myDate); // object

let specificDate = new Date('2020-01-01');
console.log(specificDate.toString()); // Specific date

let anotherDate = new Date(2022, 0, 15, 10, 30, 0); // January is 0
console.log(anotherDate.toLocaleString()); // Another specific date

let anotherDate2 = new Date('2022, 11, 25'); // December 25, 2022
console.log(anotherDate2.toLocaleString()); // Another specific date

//TIMESTAMP
let myTimeStamp = Date.now();// milliseconds since Jan 1, 1970
console.log(myTimeStamp);

console.log(specificDate.getTime()); // milliseconds of specific date

let newDate = new Date();
console.log(newDate.getFullYear()); // Current year
console.log(newDate.getMonth()); // Current month (0-11)
console.log(newDate.getDate()); // Current date (1-31)
console.log(newDate.getDay()); // Current day of the week (0-6)
console.log(newDate.getHours()); // Current hours (0-23)
console.log(newDate.getMinutes()); // Current minutes (0-59)
console.log(newDate.getSeconds()); // Current seconds (0-59)

//
newDate.toLocaleString('default', { weekday: 'long' }); // Full weekday name
newDate.toLocaleString('default', { month: 'long' }); // Full month name