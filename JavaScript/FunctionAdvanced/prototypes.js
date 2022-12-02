// OOP aka prototypes in js

// Object Oriented Programming is popular
// paradigm for structuring our complex code

// new and class keywords as tools to 
// automate our object & method creation

// Prototype chain - the feature behind-the-scenes 
// that enables emulation of OOP

/**
 * user1:
 * - name: 'Tim'
 * - score: 3
 * 
 * user2:
 * - name: 'Stephanie'
 * - score: 5
 * 
 * 
 */

// 1. create object
const user1 = {
  name: 'Will',
  score: 3,
  increment: function() { user1.score++ }
};

// Dot notation
user1.increment()

// 2. create object
const user2 = {}
user2.name = 'Tim'
user2.score = 6
user2.increment = function name(params) {
 user2.score++ 
}

// Factory Fn

function userCreator(name, score) {
  const newUser = {}
  newUser.name = name
  newUser.score = score
  newUser.increment = function() {
    newUser.score++
  }
  return newUser
}

// const user11 = userCreator('Will', 3)
// const user12 = userCreator('Tim', 5)
// user1.increment()

// Prototype chain
function userCreator2(name, score) {
  const newUser = Object.create(userFnStore)
  newUser.name = name
  newUser.score = score
  return newUser
}

const userFnStore = {
  increment: function() {
    this.score++
  },
  login: function() {
    console.log('logged in');
  }
}
// const user21 = userCreator('Will', 3)
// const user22 = userCreator('Tim', 5)
// user21.increment()

// old bug with 'this'
function userCreator3(name, score) {
  const newUser = Object.create(userFnStore3)
  newUser.name = name
  newUser.score = score
  return newUser
}

const userFnStore3 = {
  increment: function() {
    // const that = this // 1. way 
    // add1.call(this) // 2. way
    // arrow fn 3. way
    function add1 () {
      this.score++
    }
    add1()
  }
}

const user31 = userCreator3('Will', 3)
const user32 = userCreator3('Tim', 5)
console.log(user31.score)
user31.increment()
console.log(user31.score)