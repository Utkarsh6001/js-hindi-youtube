// (Primitive)
// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100; // Number    
const scoreValue = 100.3; // String     
const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined
const id = Symbol("123"); // Symbol
const bigNumber = 3456789012345678901234567890n; // BigInt



// (Non primitive) 
 //Reference : Array , Object , Function 

const heroes = ["Shaktiman" , "Naagraj" , "Doga"] // Array

let MyObj = {  // Object
    name : "Utkarsh",
    age : 22,
 };

const myFunction = function(){  // Function
    console.log("Hello World");
 }

 console.log(typeof scoreValue);//



 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack(Primitive) , Heap(Non-Primitive)

 let myYoutubename = "Utkarsh.com"; // stored in stack

 let anothername = myYoutubename; // stored in stack
 anothername = "New Utkarsh.com";

 console.log(myYoutubename); // Utkarsh.com
 console.log(anothername); // New Utkarsh.com

    let userOne = {
        email : "utkarsh@gmail.com",
        upi: "utkarsh@oksbi"
    }  // stored in heap

    let userTwo = userOne; // stored in heap
    userTwo.email = "newutkarsh@gmail.com";

    console.log(userOne.email); // newutkarsh@gmail.com 
    console.log(userTwo.email); // newutkarsh@gmail.com