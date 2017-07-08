/**
 * @Importandum
 * This module contains methods used to process a list
 * of numbers according to the FizzBuzz mutliplicity tests.
 */

import {kestrel, thunk} from './utilities'

/** 
 * @param {integer} target   The number to test multiplicity against.
 * @param {integer} number   The number to test multiplicity of.
 */
const isMultipleOf = target => number => number % target === 0

export const isFizz = isMultipleOf(3)

export const isBuzz = isMultipleOf(5)

export const isFizzBuzz = number => isFizz(number) && isBuzz(number)

/**
  @param {function} predicate    A boolean function to call with subject.
  @param {function} positive     The function to invoke if predicate returns true.
  @param {function} negative     The function to invoke if predicate returns false.
  @param {any} subject           The value to pass the predicate function.
*/
export const filter = predicate => positive => negative => subject =>
  predicate(subject) ? positive(subject) : negative(subject)

export const filterFizz = filter(isFizz)(thunk("Fizz"))(kestrel)

export const filterBuzz = filter(isBuzz)(thunk("Buzz"))(kestrel)

export const filterFizzBuzz = filter(isFizzBuzz)(thunk("FizzBuzz"))(kestrel)

/**
 * @param {integer} lowerBound The number to start counting from.
 * @param {integer} upperBound The number to count to.
 */
export function* inclusiveRange (lowerBound, upperBound) {
  while (lowerBound <= upperBound) {
    yield lowerBound++
  }

  return lowerBound
}
