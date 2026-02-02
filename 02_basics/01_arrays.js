// Array

const myArr = [10, 20, 30, 40, 50];
// console.log(myArr); // Print the entire array
// console.log(typeof myArr); // Check the type of the array

// // Accessing elements
// console.log(myArr[0]); // First element
// console.log(myArr[2]); // Third element

// // Modifying elements
// myArr[1] = 25; // Change second element to 25
// console.log(myArr);

// // Array length
// console.log(myArr.length); // Get the length of the array

// // Adding elements
// myArr.push(60); // Add 60 at the end
// console.log(myArr);

// myArr.unshift(5); // Add 5 at the beginning
// console.log(myArr);

// // Removing elements
// myArr.pop(); // Remove last element
// console.log(myArr);

// myArr.shift(); // Remove first element
// console.log(myArr);

// // Finding index of an element
// const index = myArr.indexOf(30);
// console.log(index); // Index of element 30

// // Checking if an element exists
// const exists = myArr.includes(40);
// console.log(exists); // true if 40 is in the array, false otherwise

//slice, splice
console.log("A", myArr);

const newArr = myArr.slice(1, 4); // Slicing from index 1 to 3
console.log(newArr);

console.log("B", myArr);
const newArr2 =myArr.splice(1, 4)
console.log(newArr2);

//Difference between slice and splice
//slice does not modify the original array, it returns a new array
//splice modifies the original array and returns the removed elements

console.log("C", myArr);
console.log(newArr2);

