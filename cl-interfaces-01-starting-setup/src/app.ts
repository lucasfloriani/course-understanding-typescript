interface Person {
  // name: string = 'Max' (Not concrete value)
  name: string
  age: number

  greet(phrase: string): void
}

let user1: Person

user1 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  },
}

user1.greet('Hi there - I am')