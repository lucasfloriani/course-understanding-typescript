// interface Person {
//   // name: string = 'Max' (Not concrete value)
//   name: string
//   age: number

//   greet(phrase: string): void
// }

// let user1: Person

// user1 = {
//   name: 'Max',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name)
//   },
// }

// user1.greet('Hi there - I am')

// ==============================================================

interface Named {
  // Readonly = can only be add the value once in the initialization
  readonly name: string // Can`t add public, private, protected
}

interface Greetable extends Named {
  greet(phrase: string): void
}

// class Person implements Greetable, AnotherInterface {
class Person implements Greetable {
  name: string
  age = 30

  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
}

let user1: Greetable

user1 = new Person('Max')
// user1.name = 'Manu' // Error by readonly in name from interface

user1.greet('Hi there - I am')
console.log(user1)