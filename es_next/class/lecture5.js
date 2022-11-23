/**
 * 4 Principles of OOP
 * I   Inheritance
 * II  Encapsulation
 * III Polymorphism
 * IV  Abstraction
 */

// constructor is main part of class; it enable the creation of instances(objects)
// class is just blueprint for object
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return (`
      The name of the animal is ${this.name}
      and age is ${this.age}
    `)
  }
}

// instance of class (object)
// we use 'new' keyword before class name
const panter = new Animal('panter', 5);
console.log(panter);
console.log(panter.getInfo());

const tigar = new Animal('tigar', 2);
console.log(tigar);
console.log(tigar.getInfo());

// example of using existing class in javascript
// const date = new Date();
// const myPromise = new Promise();

// Inheritance
// with keyword 'super' we can call constructor of extends class
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age)
    this.breed = breed
  }

  bark() {
    return 'woof'
  }
}

class Cat extends Animal {
  constructor(name, age, weight) {
    super(name, age)
    this.weight = weight
  }
}

const germanShepard = new Dog('Mondo', 6, 'German Shepard');
console.log(germanShepard.getInfo());
console.log(germanShepard.breed);

const myCat = new Dog('Maca', 6, '5kg');
console.log(myCat.getInfo());
console.log(myCat.weight);

// Encapsulation
/**
 * Encapsulation is a restriction mechanism making accessing the data 
 * impossible without using special methods; object info stays private.
 * 
 */

class Fish extends Animal {
  #weakness; // this '#' we use to mark private field
  constructor(name, age, weakness) {
    super(name, age)
    this.#weakness = weakness
  }

  // special method for reading private field (getter)
  getWeakness() {
    return this.#weakness;
  }
  
  // special method for changing private field (setter)
  setWeakness(newWeakness) {
    this.#weakness = newWeakness
  }

}

const seaLeon = new Fish('Sea Leon', 10, 'skin without armour')
console.log(seaLeon.getWeakness())
const shell = new Fish('Shell', 2, 'cannot move')
shell.setWeakness('armour can be opened')
console.log(shell.getWeakness());

// Polymorphism
/**
 * Polymorphism is a concept that utilizes inheritance for reusing methods 
 * multiple times with a different behavior depending on class types
 */

shell.getInfo() // use getInfo method from 

class Fish2 extends Animal {
  #weakness;
  constructor(name, age, weakness) {
    super(name, age)
    this.#weakness = weakness
  }

  getWeakness() {
    return this.#weakness;
  }
  
  setWeakness(newWeakness) {
    this.#weakness = newWeakness
  }

  getInfo() {
    return `This method is different`
  }
}

const myFish = new Fish2('whale', 10, 'eating each other')
myFish.getInfo() // getInfo doing some other thing, not predefine logic in extended class

// Abstraction
/**
 * Abstract class is a class which can't be instantiated and require subclasses
 */

class AnimalAbstraction {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    if(this.constructor == AnimalAbstraction) {
      throw new Error('cannot create a instance of Abstract class')
    }
  }

  run() {
    throw new Error('Abstract method does not have an implementation')
  }
}

// const myHorse = new AnimalAbstraction('Sarac', 22)
// console.log(myHorse.name); // output: Error: cannot create a instance of Abstract class

class Horse extends AnimalAbstraction {
  constructor(name, age, legs) {
    super(name, age)
    this.legs = legs
  }
}
class Horse3 extends AnimalAbstraction {
  constructor(name, age, legs) {
    super(name, age)
    this.legs = legs
  }

  run() {
    return `${this.name} is running`
  }
}
const myHorse2 = new Horse('Sarac', 10,  4)
const myHorse3 = new Horse3('Sarac', 10,  4)
//console.log(myHorse2.run()) // output: Error: Abstract method does not have an implementation
console.log(myHorse3.run()) // output: Sarac is running

// compere function vs class

// ES5
function Func(a, b) {
  this.a = a
  this.b = b
}

Func.prototype.getSum = function () {
  return this.a + this.b
}

var x = new Func(3, 4)

// ES6
class Func {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  getSum() {
    return this.a + this.b
  }
}

let x = new Func(3, 4)

x.getSum() // returns 7