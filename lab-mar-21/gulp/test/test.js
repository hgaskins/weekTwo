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
    assert.deepEqual(compute.PROBLEMTWO(ARGUMENTS), RESULT);
  });

});


// model = 'Tesla';
// it('Nice ' + model, function() {
//   assert(true === compute.car(model), 'Nice ' + model);
//
// });
