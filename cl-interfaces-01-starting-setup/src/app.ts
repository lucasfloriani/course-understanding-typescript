// interface Person {
//   // name: string = 'Max' (Not concrete value)
//   name: string
//   age: number

//   greet(phrase: string): void
// }

// let user1: Person

// user1 = {
//   name: 'Max',
//   age: 30, // Can't add extra fields in literal object when using interfaces, only can add extra fields in classes
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name)
//   },
// }

// user1.greet('Hi there - I am')

// ==============================================================

// OBS: Types for function types is more used often
// type AddFn = (a: number, b: number) => number
interface AddFn {
  // Understands that this interface has a anonymous function that will use the interface name keyword
  (a: number, b: number): number
}

let add: AddFn

add = (n1: number, n2: number) => n1 + n2

interface Named {
  // Readonly = can only be add the value once in the initialization
  readonly name?: string // Can`t add public, private, protected
  outputName?: string
  // myMethod?(): void // How to make methods as optional
}

interface Greetable extends Named {
  greet(phrase: string): void
}

// class Person implements Greetable, AnotherInterface {
class Person implements Greetable {
  name?: string
  age = 30

  constructor(n?: string) {
    if (n) {
      this.name = n
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name)
    } else {
      console.log('Hi!')
    }
  }
}

let user1: Greetable

// user1 = new Person('Max')
user1 = new Person()
// user1.name = 'Manu' // Error by readonly in name from interface

user1.greet('Hi there - I am')
console.log(user1)