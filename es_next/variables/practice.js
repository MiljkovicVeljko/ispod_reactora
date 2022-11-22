/**
 * 1. Task: currently our index is exposed outside of the loop, how can you fix this?
 *     
 * 
 */

let array = ['a', 'b', 'c', 'd']

for (var index = 0; index < array.length; index++) {
  console.log('Element niza je: ' + array[index]);
}

console.log('Indeks posle for-a je: ' + index); // output(before): 4. output(after): error 