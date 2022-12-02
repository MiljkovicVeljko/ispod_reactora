/**
 * Goal is to convert class to function (with similar logic not the same) and reverse
 */

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

 class Cat extends Animal {
  constructor(name, age, weight) {
    super(name, age)
    this.weight = weight
  }
}

function Func(a, b) {
  this.a = a
  this.b = b
}
// function AnimalFn(name, age) {

// }

// function CatFn(params) {
  
// }