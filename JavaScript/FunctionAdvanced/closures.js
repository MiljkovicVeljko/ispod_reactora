// how can fn remember previous values?
// Closure Fn that return other fn
// 1.
function createFn() {
  function multupluBy2(num) {
    return num * 2
  }
  return multupluBy2;
}

const genFn = createFn()
const res = genFn(3)

// 2.
// using outer memory
function outer() {
  let counter = 0
  function incrementCounter() {
    counter++
  }
  incrementCounter()
}
// outer()

// 3.
// using outer memory (memory of outer fn was passed to inner fn)
function outer2() {
  let counter = 0

  function incrementCounter() {
    if (counter > 0) {
      console.log('Cannot run fn more than once!');
      return;
    }
    counter ++;
    console.log('counter: ',counter)
  }

  return incrementCounter
}
const newFn = outer2()
newFn()
newFn()
newFn()

const anotherFn = outer2()
anotherFn()
anotherFn()
anotherFn()
