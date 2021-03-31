// import moment here; use this package in each function
const moment = require('moment')

// console.log('Today is', day).

// import moment from 'moment';
const m = moment();

////DONT THINK THIS IS RIGHT...TESTING IT OUT////////
const today = () => {
  // write code for dates.today
  return m.format('dddd');
}
console.log(today())

const calendar = () => {
  // write code for dates.calendar
  return m.format('LL');
}
console.log(calendar())

const currentTime = () => {
  // write code for dates.currentTime
  return m.format( `LTS`)
}
console.log(currentTime())

module.exports = {
  today,
  calendar,
  currentTime
}