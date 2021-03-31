/**
 * Returns true if the number is even
 * @param {number} num 
 */
const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}


const sum = (arr) => {
  const sumOfArr = (total, num) => {
    return total + num
  }
  return arr.reduce(sumOfArr);
}

let arr1 = [1, 2, 3, 4]
console.log(sum(arr1))


const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] + arr[j] === sum) {
          return true;
        }
      }
    }
    return false;
  }

console.log(comboSum(arr1, 7))

  module.exports = {
    isEven,
    sum,
    comboSum
  }