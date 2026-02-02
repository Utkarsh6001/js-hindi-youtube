//1
const score = 400
console.log(score);
//2
const balance = new Number(100);
console.log(balance);
//3
console.log(balance.toString());//number to string conversion
console.log(balance.toString().length);//string length
//4
console.log(balance.toFixed(2));//decimal places
//5
console.log(typeof score);//check krne ke liye
console.log(typeof balance);//check krne ke liye

//6
const otherNumber = 123.4567;
console.log(otherNumber.toPrecision(3));//total number of digits

//7
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));//local number format like , lga hoga (indian format)

//+++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));//absolute value ....minus value ko plus me convert kr dega
console.log(Math.round(4.6));//rounding off
console.log(Math.ceil(4.2));//upper value...thoda bhi ajda hoga to upper value dega
console.log(Math.floor(4.8));//lower value...lowest value dega
console.log(Math.min(4, 3 ,6 ,8));//minimum value
console.log(Math.max(4, 3 ,6 ,8));//maximum value
console.log(Math.random());//random number between 0 and 1
console.log(Math.random() * 10);//random number between 0 and 10
console.log(Math.floor(Math.random() * 10));//random whole number between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1);//random whole number between 1 and 10
//to generate random number between any two numbers
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);//random whole number between 10 and 20