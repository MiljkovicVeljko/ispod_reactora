/**
 * 1. refactor OLD ES5 function to sorter arrow fn
 * 2. log to console all subscribed users via ES5 and ES6
 * 
 * 
 * 
 */

const users = [
  { username: 'veljko', password: '1234', subscribed: true },
  { username: 'kristina', password: '1234', subscribed: false },
  { username: 'branko', password: '1234', subscribed: true },
  { username: 'mladen', password: '1234', subscribed: false },
  { username: 'djordje', password: '1234', subscribed: true },
]

function oldEs6(a, b) {
  return a + b
}

function getSubs(list) {
  // logic
}