/**
 * This function splits a string on the provided delimete and returns the resulting array
 * for example:
 * str: 'the_brown_fox_jumped_over_the_lazy_dog'
 * delim: '_'
 * result: ['the', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']
 * @param {string} str the string to split 
 * @param {string} delim the character to split on
 */

const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
  }

let str1 = 'the_brown_fox_jumped_over_the_lazy_dog'
let delim1 = '_'

console.log(split(str1, delim1))

const pairs = (str) => {
  // write code for strings.pairs
  // Break a string into pairs of two characters each. Return the array of pairs
  // Hint: For loop, increment by 2
  let arrOfPairs = [];
  for(let i=0; i<str.length; i+=2){
   arrOfPairs.push(str.slice(i, i+2))
  }
  return arrOfPairs
}

str2 = "abcdefge"
console.log(pairs(str2))

const reverse = (str) => {
  // write code for strings.reverse
  return str.split('').reverse().join('');
}

module.exports = {
  split,
  pairs,
  reverse
}