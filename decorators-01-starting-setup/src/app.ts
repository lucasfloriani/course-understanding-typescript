// Decorator
// Is just a function, a function applied to something, for example a class, in a certain way
// OBS 1: The patter is to use first letter with uppercase
// OBS 2: Decorators run when the javascript encounters the class definition, doesn't when the object is instantiated
// OBS 3: When used multiples decorators, the order is bottom to up
// OBS 4: Decorator Factories are executed before everything
// OBS 5: Don't run in runtime
// OBS 6: Is a function that is run when a class is defined
// OBS 7: Decorators can only return values in decorators for classes, methods and accessors,
//        the others can return a value but will not be used

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

// function WithTemplate(template: string, hookId: string) {
//   console.log('TEMPLATE FACTORY')
//   return function (constructor: any) {
//     console.log('Rendering template')
//     const hookEl = document.getElementById(hookId)
//     const p = new constructor()
//     if (hookEl) {
//       hookEl.innerHTML = template
//       hookEl.querySelector('h1')!.textContent = p.name
//     }
//   }
// }

// Factory Class Decorator with return changing the class
// ---
// The return is a new constructor to a class
// Now the logic will be only executed when a object is instantiated
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY')
  return function<T extends {new(...args: any[]): { name: string }}>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super()
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.textContent = this.name
        }
      }
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

// ---

// Property Decorator
// Is executed when the javascript sees the definition of this property in the class in the code
// target:
//   - Instance property: prototype of the object that was created
//   - Static property: will refect to the constructor function instead
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!')
  console.log(target, propertyName)
}

// Accessor Decorator
// + target:
//   - Instance property: prototype of the object that was created
//   - Static property: will refect to the constructor function instead
// + name: Name of the accessor
// + descriptor: Info about the property
//   - get
//   - set
//   - enumerable
//   - configurable
//
// Can return a new changed descriptor
// function Log2(target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

// Method Decorator
// + target:
//   - Instance property: prototype of the object that was created
//   - Static property: will refect to the constructor function instead
// + name: Name of the accessor
// + descriptor: Info about the property
//   - configurable
//   - enumerable
//   - value (the method)
//   - writable
//
// Can return a new changed descriptor
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

// Parameter Decorator
// + target:
//   - Instance property: prototype of the object that was created
//   - Static property: will refect to the constructor function instead
// + name: Name of the method where this parameter is used
// + position: Order of the parameter in the method
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!')
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string
  private _price: number

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('Invalid price - should be positive!')
    }
  }

  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}

const p1 = new Product('Book', 19)
const p2 = new Product('Book', 29)


// Method Decorator with autobind
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() { // get is a extra layer from addEventListener
      // this = What is responsable to trigger this method (The Object from the Class)
      const boundFn = originalMethod.bind(this)
      return boundFn
    },
  }
  return adjDescriptor
}

class Printer {
  message = 'This works!'

  @Autobind
  showMessage() {
    console.log(this.message)
  }
}

const p = new Printer()

const button = document.querySelector('button')!
// button?.addEventListener('click', p.showMessage.bind(p))
button?.addEventListener('click', p.showMessage)
