/**
 * @Runnable
 * This module immediately invokes fizzbuzz with the user's
 * specified upperBound (100 by default).
 * 
 * Example:
 * 
 *   $ node main.js
 *   $ node main.js 27
 */

import {fizzbuzz} from './fizzbuzz'
import {unary as u } from './utilities'

(function main (upperBound) {
  fizzbuzz(upperBound).forEach(u(console.log))
}(process.argv[2]))
