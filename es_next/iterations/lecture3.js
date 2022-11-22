/**
 * A more concise syntax has been introduced for iteration through arrays and other iterable objects.
 * 
 */
 var arr = ['a', 'b', 'c']
// ES5
for (var i = 0; i < arr.length; i++) {
  // console.log(arr[i])
}
// ES6
for (let i of arr) {
  // console.log(i)
}

const object = { a: 1, b: 2, c: 3 };
// ES5 
let keys = Object.keys(object);
for (let i = 0; i < keys.length; i++) {
  let property = keys[i];
  // console.log(`${property}: ${object[property]}`);
}
// ES6
for (const property in object) {
  // console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"


const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
// console.log(text);
// ARRAY METHODS

/**
 callbackFn
A function to execute for each element in the array. Its return value is added as a single element in the new array.

The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array map() was called upon.
 */

// anatomy
// map((element, index, array) => { /* … */ })

const comments = ['super', 'odlicno', 'vrh', 'extra'];
let result = comments.map((comment, i, originalComments) => {
  // console.log(`Current element is: ${comment}, its index is: ${i} and the original comments are: ${originalComments}`);
  let commentObj = {
    komentar: comment,
    user: 'Kristina',
    id: i
  }
  if (comment === 'vrh') {
    commentObj.user = 'Veljko';
  }
  return commentObj;
})

// console.log('Mapirani niz: ', result);

/**
 * callbackFn
A function to execute for each element in the array. 
It should return a truthy to keep the element in the resulting array, 
and a falsy value otherwise.
 */
// filter((element, index, array) => { /* … */ })

let author = 'Veljko';
let authorComments = result.filter(item => item.user === author);
// console.log(authorComments);

const getComments = (list, commentator) => list.filter(item => item.user === commentator);
let myComments = getComments(result, author);
// console.log(result);

const deleteComment = (list, id) => list.filter(item => item.id !== id);
// console.log(deleteComment(result, 2));



/**
 * callbackFn
A function to execute for each element in the array. 
It should return a truthy value to indicate a matching element has been found.
 */
// find((element, index, array) => { /* … */ })

const getUser = (list, id) => list.find(item => item.id === id);
console.log(getUser(result, 1));