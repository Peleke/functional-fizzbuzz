import {filterFizz, filterBuzz, filterFizzBuzz, range, unary as u} from './helpers'

const fizzbuzz = (upperBound = 100) => {
  const hunnid = [...range(1, upperBound)]
  
  return hunnid
    .map(filterFizzBuzz)
    .map(filterFizz)
    .map(filterBuzz)
}

(function main (upperBound) {
  fizzbuzz(upperBound)
    .forEach(u(console.log))
}(process.argv[2]))
