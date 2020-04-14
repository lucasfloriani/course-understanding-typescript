// Decorator
// Is just a function, a function applied to something, for example a class, in a certain way
// OBS 1: The patter is to use first letter with uppercase
// OBS 2: Decorators run when the javascript encounters the class definition, doesn't when the object is instantiated

// Class Decorator
// Decorators used in classes receive one parameter (the constructor function)
// function Logger(constructor: Function) {
//   console.log('Logging...')
//   console.log(constructor)
// }

// Decorator Factories
// Returns a decorator whit changes from parameters
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId)
    const p = new constructor()
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person()

console.log(pers)
