"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
/**
 * @param {any} value    The value to pass back.
 */
const kestrel = exports.kestrel = value => value;

/** 
 * @param {any} value    The value to wrap in a thunk.
 */
const thunk = exports.thunk = value => () => value;

/**
 * @param {function} fn    Function to call with only val
 * @param {any} val        Value to pass to fn
 */
const unary = exports.unary = fn => val => fn(val);

/** 
 * @param {integer} target   Number to test multiplicity against
 * @param {integer} number   Number to test multiplicity of
 */
const isMultipleOf = target => number => number % target === 0;

const isFizz = exports.isFizz = isMultipleOf(3);

const isBuzz = exports.isBuzz = isMultipleOf(5);

const isFizzBuzz = exports.isFizzBuzz = number => isFizz(number) && isBuzz(number);

/**
  @param {function} predicate    Boolean function to call with subject.
  @param {function} positive     Function to invoke if predicate returns true.
  @param {function} negative     Function to invoke if predicate returns false.
  @param {any} subject           Value to pass predicate function.
*/
const filter = exports.filter = predicate => positive => negative => subject => predicate(subject) ? positive(subject) : negative(subject);

const filterFizz = exports.filterFizz = filter(isFizz)(thunk("Fizz"))(kestrel);

const filterBuzz = exports.filterBuzz = filter(isBuzz)(thunk("Buzz"))(kestrel);

const filterFizzBuzz = exports.filterFizzBuzz = filter(isFizzBuzz)(thunk("FizzBuzz"))(kestrel);

/**
 * @param {integer} lowerBound Integer to generate range from.
 * @param {integer} upperBound Integer 
 */
function* range(lowerBound, upperBound) {
  while (lowerBound <= upperBound) {
    yield lowerBound++;
  }

  return lowerBound;
}

