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

// Type guards help with union types
// Type guards is the ideia of checking if a certain method or property exists before you tried to used it
// OBS: Doesn't have any code especific in typescript to do this
function add(a: Combinable, b: Combinable) {
  // Type Guard checking
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ', emp.name)
  // Type Guard checking
  if ('privileges' in emp) {
    console.log('Privileges: ', emp.privileges)
  }
  if ('startDate' in emp) {
    console.log('Start Date: ', emp.startDate)
  }
}

// printEmployeeInformation(e1)
printEmployeeInformation({ name: 'Manu', startDate: new Date() })

class Car {
  drive() {
    console.log('Driving...')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...')
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ... ' + amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  // Type Guard - Better way to check for classes
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(1000)
  // }
}

useVehicle(v1)
useVehicle(v2)
