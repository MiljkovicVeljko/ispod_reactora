// ES6 or ESNext

// Resources:
// overview: https://www.taniarascia.com/es6-syntax-and-feature-overview/
// in details: https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript

// 1. Variables (var, let, const)

/*
  Keyword    |  Scope           |  Hoisting  |  Can be Reassigned  |  Can be Redeclared
  1. var     |  Function Scope  |  Yes       |  Yes                |  Yes
  2. let     |  Block Scope     |  No        |  Yes                |  No
  3. const   |  Block Scope     |  No        |  No                 |  No

*/

var x = 0;
let y = 1;
const z = 2;

/**
 * 
 * Scope in JavaScript refers to the current context of code, 
 * which determines the accessibility of variables to JavaScript. 
 * The two types of scope are local and global:
    Global variables are those declared outside of a block
    Local variables are those declared inside of a block
 * 
 */

// var is function scoped tad means when we using var inside if statement of for loop it is accessible outside the scope
if (true) {
  var x = 6;
}
console.log(x); // output: 6 not 0 and we redeclare x variable

// ES6 introduced the let keyword, which allows for block-scoped variables which cannot be hoisted or redeclared.
// let y; // output error: SyntaxError: Identifier 'y' has already been declared


// ES6 introduced the const keyword, which cannot be redeclared or reassigned, but is not immutable.
// z = 22 // output error: TypeError: Assignment to constant variable.

// hoisting is a behavior of JavaScript in which variable and function declarations are moved to the top of their scope
// example of hoisting: 

// The code we wrote
// console.log(username); // output: undefined
var username = 'veljko';

// How JavaScript interpreted it
var username;
// console.log(username);
username = 'veljko';


// no hoisting with let and const:
// console.log(usernameLet); // output error: ReferenceError: Cannot access 'usernameLet' before initialization
let usernameLet = 'veljko';

/**
 *  Values that cannot change in programming are known as immutable,
 *  while values that can be changed are mutable. Although const values cannot be reassigned,
 *  they are mutable as it is possible to modify the properties of objects declared with const.
 */

// immutable:
const SECRET_KEY = '@#$%^';
// SECRET_KEY = '1234' // output error: TypeError: Assignment to constant variable.

// mutable:
const SECRET_OBJECT = {
  name: 'veljko',
  password: '@#$%^'
}

SECRET_OBJECT.password = 1234
console.log(SECRET_OBJECT); // output: { name: 'veljko', password: 1234 }

/**
 * Constants are useful for making it clear to your future self and other programmers working on a project with you 
 * that the intended variable should not be reassigned. If you expect that a variable may be modified in the future, 
 * you will likely want to use let to declare the variable instead.
 */