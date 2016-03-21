var assert = require('assert');
var compute = require('../js/compute.js');

describe('My first test', function() {
  //example test.js code to use
  // it('should check first question', function() {
  //   assert.deepEqual(compute.getQuestion(0), 'first');
  // });

  //problemOne
  it('should check ', function() {
    assert.deepEqual(compute.sum(3,4), 7);
  });

  //problemTwo
  it('should check ', function() {
    assert.deepEqual(compute.multiply(3,3), 9);
  });

  //problemThree
  it('should check ', function() {
    assert.deepEqual(compute.sumAndMultiply(1, 3, 5), [9, 15]);
  });

  //problemFour
  it('should check ', function() {
    assert.equal(compute.sumArray([1,2,3]), 6);
  })

});




// model = 'Tesla';
// it('Nice ' + model, function() {
//   assert(true === compute.car(model), 'Nice ' + model);
//
// });
