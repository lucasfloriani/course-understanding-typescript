type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

// interface ElevatedEmployee extends Employee, Admin {}

// Intersection Type
type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
}

// Union Type
type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

// // Type guards help with union types
// // Type guards is the ideia of checking if a certain method or property exists before you tried to used it
// // OBS: Doesn't have any code especific in typescript to do this
// function add(a: Combinable, b: Combinable) {
//   // Type Guard checking
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString()
//   }
//   return a + b
// }

// Function overloading
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: string, b: number): string
function add(a: number, b: string): string
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

// const result = add(1, 5)
// const result = add('Max', "Schwarz") as string // Need to imply what type it is when not using function overloading
const result = add('Max', ' Schwarz')
result.split('')

// Optional Chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: {
    title: 'CEO',
    description: 'My own company',
  },
}

// console.log(fetchedUserData.job && fetchedUserData.job.title)
console.log(fetchedUserData?.job?.title)

// Nullish Coalescing
// const userInput = null // undefined
const userInput = ''

// const storedData = userInput || 'DEFAULT' // Can be wrong when is a falsy value
const storedData = userInput ?? 'DEFAULT' // Get default value only when value is null or undefined

console.log(storedData)


// type UnknownEmployee = Employee | Admin

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ', emp.name)
//   // Type Guard checking
//   if ('privileges' in emp) {
//     console.log('Privileges: ', emp.privileges)
//   }
//   if ('startDate' in emp) {
//     console.log('Start Date: ', emp.startDate)
//   }
// }

// // printEmployeeInformation(e1)
// printEmployeeInformation({ name: 'Manu', startDate: new Date() })

// class Car {
//   drive() {
//     console.log('Driving...')
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck...')
//   }

//   loadCargo(amount: number) {
//     console.log('Loading cargo ... ' + amount)
//   }
// }

// type Vehicle = Car | Truck

// const v1 = new Car()
// const v2 = new Truck()

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive()
//   // Type Guard - Better way to check for classes
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000)
//   }
//   // if ('loadCargo' in vehicle) {
//   //   vehicle.loadCargo(1000)
//   // }
// }

// useVehicle(v1)
// useVehicle(v2)

// // Discriminated Unions ([type | kind] is a pattern)
// // One common property that all types in the union have
// // Seems better than Type Guards above
// interface Bird {
//   type: 'bird'
//   flyingSpeed: number
// }

// interface Horse {
//   type: 'horse'
//   runningSpeed: number
// }

// type Animal = Bird | Horse

// function moveAnimal(animal: Animal) {
//   // if ('flyingSpeed' in animal) {
//   //   console.log('Moving with speed: ' + animal.flyingSpeed)
//   // }

//   let speed
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed
//       break
//     case 'horse':
//       speed = animal.runningSpeed
//       break
//   }

//   console.log('Moving with speed: ' + speed)
// }

// moveAnimal({ type: 'bird', flyingSpeed: 10 })

// // Type Casting
// // OBS: ! say to typescript that the value won't will be a Null

// // First way
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!

// // Second way
// // const userInputElement = document.getElementById('user-input')! as HTMLInputElement
// const userInputElement = document.getElementById('user-input')

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hi there!'
// }

// // Index Properties
// // Can store any property key name but need to be in a specific type
// // OBS: Only accept key type as strings, numbers or symbols
// interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character' }
//   // id: string
//   // age: number // Not valid when using Index property
//   [prop: string]: string
// }

// const errorBag: ErrorContainer = {
//   1: 'Not a valid email', // 1 can be interpreted as a string so is a valid property
//   email: 'Not a valid email',
//   username: 'Must start with a capital character!'
// }
