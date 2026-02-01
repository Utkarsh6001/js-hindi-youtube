const name = "utkarsh";
const repoCount = 50;

//console.log(name  + repoCount + " Value");

console.log( `Hello my name is ${name} and my repo count is ${repoCount}` );

const gameName = new String('utkarsh6001')

console.log(gameName[0]);
console.log(gameName);

console.log(gameName.length);
console.log(gameName.toUpperCase());//capital letters
console.log(gameName.toLowerCase());// small letters
console.log(gameName.charAt(3)); // character at index 3
console.log(gameName.indexOf('k'));// k konse index pr hai
console.log(gameName.includes('6001'));//6001 hai ya nhi
console.log(gameName.startsWith('utk'));// utk se start ho rha hai
console.log(gameName.endsWith('01'));// 01 pe end ho rha hai
console.log(gameName.indexOf('6'));// 6 konse index pr hai
console.log(gameName.replace('6001', 'thegreat'));// replacing 6001 with thegreat change krna
console.log(gameName.slice(0,3));// 0 se 3 index tk ka slice krke dega
console.log(gameName.slice(3));// 3 se end tk ka slice krke dega
console.log(gameName.split('k'));  // k ke basis pr split kr dega
console.log(gameName.trim());//extra space htane ke liye

