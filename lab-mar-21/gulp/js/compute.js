"use strict"
/********************************************************
 * Example of TDD on a feature used in Week 1's labwork *
 ********************************************************/

var question = ['first', 'second', 'third'];

function getQuestion(index) {
  return (question[index]);
}

//exports refers to the "var app = require('../js/app');" in our test.js file. In other words its using the app.js as an object whose method is "getQuestion"
exports.getQuestion = getQuestion;

/***********************************************************
 * Example of TDD on a feature related to Week 2's labwork *
 ***********************************************************/
function addFive(num) {
  return num + 5;
}

// if(addFive(0) == 5) {
//   console.log("test 1 passed!");
// } else {
//   console.log("test 1 failed");
// }
// if(addFive(100) == 105) {
//   console.log("test 2 passed!");
// } else {
//   console.log("test 2 failed");
// }
// if(addFive(11) == 16) {
//   console.log("test 3 passed!");
// } else {
//   console.log("test 3 failed");
// }

exports.addFive = addFive;

function isEven(num) {
  return (num % 2) === 0;
}

exports.isEven = isEven;

//new function multiple_of_3

function multiple_of_3(num) {
  return (num % 3) === 0;
}

exports.multiple_of_3 = multiple_of_3;

//new function multiple_of_6

function multiple_of_6(num) {
  return (isEven(num) && multiple_of_3(num));
}

exports.multiple_of_6 = multiple_of_6;

//problemOne sum function
function sum(numOne, numTwo, numThree) {
  var result;
  if(numThree) {
    result = numOne + numTwo + numThree;
  } else {
    result = numOne + numTwo;
  }
  console.log("The sum of " + numOne + " + " + numTwo + " is " + result);
  return result;
}

exports.sum = sum;

//problemTwo multiple function
function multiply(x, y, w) {
  var z;
  if(w) {
    z = x * y * w;
  } else {
    z = x * y;
  }
  console.log("The multiple of " + x + " * " + y + " is " + z);
  return z;
}

exports.multiply = multiply;

//problemThree sumAndMultiply
function sumAndMultiply(aa, bb, cc) {
  console.log(aa + " and " + bb + cc + "sum to " + sum(aa, bb, cc));
  console.log("the numbers " + aa + " and " + bb + cc + "have a product of " + multiply(aa, bb, cc));
  return [sum(aa, bb, cc), multiply(aa, bb, cc)];
}

exports.sumAndMultiply = sumAndMultiply;

//problemFour
function sumArray(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
    console.log(arr[i]);
  }
  return result;
}
sumArray([1, 2, 3]);
exports.sumArray = sumArray;



// //new function Car
//
// function car(model) {
//   return "nice " + model;
// }
//
// exports.car = car;
