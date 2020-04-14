// Decorator
// Is just a function, a function applied to something, for example a class, in a certain way
// OBS 1: The patter is to use first letter with uppercase
// OBS 2: Decorators run when the javascript encounters the class definition, doesn't when the object is instantiated
// OBS 3: When used multiples decorators, the order is bottom to up
// OBS 4: Decorator Factories are executed before everything

// Class Decorator
// Decorators used in classes receive one parameter (the constructor function)
// function Logger(constructor: Function) {
//   console.log('Logging...')
//   console.log(constructor)
// }

// Decorator Factories
// Returns a decorator whit changes from parameters
function Logger(logString: string) {
  console.log('LOGGER FACTORY')
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY')
  return function (constructor: any) {
    console.log('Rendering template')
    const hookEl = document.getElementById(hookId)
    const p = new constructor()
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person()

console.log(pers)
