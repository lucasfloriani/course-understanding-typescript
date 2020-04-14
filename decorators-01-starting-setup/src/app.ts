// Decorator
// Is just a function, a function applied to something, for example a class, in a certain way
// OBS 1: The patter is to use first letter with uppercase
// OBS 2: Decorators run when the javascript encounters the class definition, doesn't when the object is instantiated

// Class Decorator
// Decorators used in classes receive one parameter (the constructor function)
function Logger(constructor: Function) {
  console.log('Logging...')
  console.log(constructor)
}

@Logger
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person()

console.log(pers)
