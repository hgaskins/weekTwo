var assert = require('assert');
var compute = require('../js/compute.js');

describe('My first test', function() {
  it('should check first question', function() {
    assert.deepEqual(compute.getQuestion(0), 'first');
  });

  it('should check third question', function() {
    assert.deepEqual(compute.getQuestion(2), 'third');
  });

  it('should increment 0 to get 5', function() { assert(5 == compute.addFive(0)); });
  it('should increment 4 to get 9', function() { assert(9 == compute.addFive(4)); });
  it('should increment -1008 to get -1003', function() { assert(compute.addFive(-1008) == -1003); });


  it('Should increment 0 to get 5',         function() { assert(true === compute.isEven(2)); });
  it('Should increment 0 to get 5',         function() { assert(false === compute.isEven(5)); });

  it('Should return true bc 9 is a multiple_of_3',         function() { assert(true === compute.multiple_of_3(9)); });
  it('Should return false bc 5 is not a multiple_of_3',         function() { assert(false === compute.multiple_of_3(5)); });

  it('Should return true bc 18 is a multiple_of_6',         function() { assert(true === compute.multiple_of_6(18)); });
  it('Should return false bc 5 is not a multiple_of_6',         function() { assert(true !== compute.multiple_of_6(5)); });


  //problemOne
  it('should check ', function() {
    assert.sum(numOne, numTwo);
  })
});


// model = 'Tesla';
// it('Nice ' + model, function() {
//   assert(true === compute.car(model), 'Nice ' + model);
//
// });
