//Variables and Data Types
var myVar = "Hello World"; //String
var myNum = 123; //Number
var myBool = true; //Boolean
var myNull = null; //Null
var myUndefined = undefined; //Undefined
let myLet = "Hello"; // Block Scope
const myConst = [1, 2, 3]; // Block Scope

//Arithmetic Operators
var sum = 1 + 2;
var difference = 3 - 1;
var product = 2 * 3;
var quotient = 10 / 2;
var remainder = 10 % 3;

//Comparison Operators
var equal = 1 == "1"; //true
var strictEqual = 1 === "1"; //false
var notEqual = 1 != "1"; //false
var strictNotEqual = 1 !== "1"; //true
var greaterThan = 2 > 1; //true
var lessThan = 1 < 2; //true
var greaterThanOrEqual = 2 >= 2; //true
var lessThanOrEqual = 1 <= 1; //true

//Logical Operators
var and = true && true; //true
var or = false || true; //true
var not = !true; //false

//Conditionals
if (condition) {
  // Code to run if condition is true
} else if (condition2) {
  // Code to run if condition2 is true
} else {
  // Code to run if both conditions are false
}

//For Loop
for (var i = 0; i < 10; i++) {
  // Code to run
}

//While Loop
var i = 0;
while (i < 10) {
  // Code to run
  i++;
}

//Functions
function myFunction(param1, param2) {
  // Code to run
  return result;
}

//Anonymous Function
var myFunction = function (param1, param2) {
  // Code to run
  return result;
};

//Arrow Function
const myFunction = (param1, param2) => {
  // Code to run
  return result;
};

// Arrow Function with Implicit Return
const myFunction = (param1, param2) => result;

//Arrays
var myArray = [1, 2, 3, 4, 5];
var myArray2 = new Array(1, 2, 3, 4, 5);

//Accessing Array Elements
var firstElement = myArray[0];

//Adding Elements to an Array
myArray.push(6);

//Removing Elements from an Array
myArray.pop();

// Array Destructuring
const [first, second, ...rest] = myArray;

// Spread Operator
const newArray = [...myArray1, ...myArray2];

//Objects
var myObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

//Accessing Object Properties
var value1 = myObject.key1;

//Adding Properties to an Object
myObject.key4 = "value4";

//Removing Properties from an Object
delete myObject.key4;

// Object Destructuring
const { firstName, lastName, age } = myObject;

// Rest Operator
const myFunction = (param1, param2, ...restParams) => {
  // Code to run
};

// Class Definition
class MyClass {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }

  myMethod() {
    // Code to run
  }
}

//Promises allow for asynchronous programming and provide a more readable way of handling callbacks.
const myPromise = new Promise((resolve, reject) => {
  // Code to run
  if (success) {
    resolve(result);
  } else {
    reject(error);
  }
});

// Promise Chain
myPromise
  .then((result) => {
    // Code to run on successful completion
  })
  .catch((error) => {
    // Code to run on error
  });

//ES6 introduced module syntax for organizing code into separate files.
// Export Syntax
export const myVar = 5;
export function myFunction() {
  // Code to run
}

// Import Syntax
import { myVar, myFunction } from "./myModule.js";
