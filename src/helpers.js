/**
 * @param {any} value    The value to pass back.
 */
export const kestrel = value => value

/** 
 * @param {any} value    The value to wrap in a thunk.
 */
export const thunk = value => () => value

/**
 * @param {function} fn    Function to call with only val
 * @param {any} val        Value to pass to fn
 */
export const unary = fn => val => fn(val)

/** 
 * @param {integer} target   Number to test multiplicity against
 * @param {integer} number   Number to test multiplicity of
 */
const isMultipleOf = target => number => number % target === 0

export const isFizz = isMultipleOf(3)

export const isBuzz = isMultipleOf(5)

export const isFizzBuzz = number => isFizz(number) && isBuzz(number)

/**
  @param {function} predicate    Boolean function to call with subject.
  @param {function} positive     Function to invoke if predicate returns true.
  @param {function} negative     Function to invoke if predicate returns false.
  @param {any} subject           Value to pass predicate function.
*/
export const filter = predicate => positive => negative => subject =>
  predicate(subject) ? positive(subject) : negative(subject)

export const filterFizz = filter(isFizz)(thunk("Fizz"))(kestrel)

export const filterBuzz = filter(isBuzz)(thunk("Buzz"))(kestrel)

export const filterFizzBuzz = filter(isFizzBuzz)(thunk("FizzBuzz"))(kestrel)

/**
 * @param {integer} lowerBound Integer to generate range from.
 * @param {integer} upperBound Integer 
 */
export function* range (lowerBound, upperBound) {
  while (lowerBound <= upperBound) {
    yield lowerBound++
  }

  return lowerBound
}
