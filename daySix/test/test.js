var assert = require('assert');
// var app = require('../js/app');
var compute = require('../js/compute.js');
describe('my first test', function() {
  it('should check first question', function() {
    assert.deepEqual(app.getQuestion(0), "first");
  });
  it('should check third question', function() {
    assert.deepEqual(app.getQuestion(2), "third");
  });
  it('Should increment 0 to get 5',         function() { assert(compute.addFive(    0),     5); });
  it('Should increment 4 to get 9',         function() { assert(compute.addFive(    4),     9); });
  it('Should increment -1008 to get -1003', function() { assert(compute.addFive(-1008), -1003); });

  //test the "isEven" function
  it('Should increment 0 to get 5',         function() { assert(true == compute.isEven(2)); });
  it('Should increment 0 to get 5',         function() { assert(false == compute.isEven(5)); });
});

//
// model = 'Tesla';
// it('Nice ' + model, function() {
//   assert.equal(app.Car(model), 'Nice ' + model);
//
// });
