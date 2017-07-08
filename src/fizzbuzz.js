/**
 * @Importable
 * This module contains the definition of the fizzbuzz
 * list processinsg routine.
 */

import {
  filterFizz, filterBuzz, filterFizzBuzz, 
  inclusiveRange as range
} from './helpers'

/**
 * @param {integer} upperBound Last number to test for FizzBuzz multiplicity.
 */
export const fizzbuzz = (upperBound = 100) => 
  [...range(1, upperBound)]
    .map(filterFizzBuzz)
    .map(filterFizz)
    .map(filterBuzz)
