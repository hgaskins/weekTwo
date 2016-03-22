var exports = {}; // Dummy declaration to let this file co-exist with test.js
var pAddFiveIn  = document.getElementById('pAddFiveIn');
var pAddFiveOut = document.getElementById('pAddFiveOut');
var pAddOneIn = document.getElementById('pAddOneIn');
var pAddOneOut = document.getElementById('pAddOneOut')


var arg = 12;
document.addEventListener('DOMContentLoaded', function() {
  // problemOne paragraph additions
    pAddOneIn.textContent = "calling the sum() with an arugment of " + " 10 and 2";
    pAddOneOut.textContent = "sum() returned " + sum(10, 2);
  // problemTwo paragraph additions
    pAddTwoIn.textContent = "call the multiply() with the argument of " + "10 and 2";
    pAddTwoOut.textContent = "multiply() returned " + multiply(10, 2);
  // problemThree paragraph additions
    pAddThreeIn.textContent = "call the sumAndMultiply() with arguments of " + "1 and 2 and 3";
    pAddThreeOut.textContent = "sumAndMultiply() returned " + sumAndMultiply(2,2,3);
  //problemFour paragraph additions
    pAddFourIn.textContent = "call the sumArray() with arguments " +  "4, 5, and 6";
    pAddFourOut.textContent = "sumArray() returned " + sumArray([4,5,6]);
  //problemFiveFive paragraph additions
    pAddFiveFiveIn.textContent = "call the multiplyArray() with arguments of " + "2, 4, and 5";
    pAddFiveFiveOut.textContent = "multiplyArray() returned " + multiplyArray([2, 4, 5]);

});
