// // Array is a Generic
// // const names: Array<string> = ['Max', 'Manuel'] // string[]
// const names: Array<string> = ['Max', 'Manuel']
// // names[0].split(' ')

// // const promise: Promise<any> = new Promise((resolve, reject) => {
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10)
//   }, 2000)
// })

// promise.then(data => {
//   // data.split(' ')
// })

// Generic Function
// function merge(objA: object, objB: object) {
// function merge<T, U>(objA: T, objB: U) {
function merge<T extends object, U extends object>(objA: T, objB: U) { // Generic constraints
  return Object.assign(objA, objB)
}

console.log(merge({ name: 'Max' }, { age: 30 }))

// const mergedObj = merge({ name: 'Max' }, { age: 30 }) as { name: string, age: number }
// Typescript doesn't have information without using generics or type casting
// mergedObj.age
// mergedObj.name

// const mergedObj = merge<{ name: string, hobbies: string[]}, { age: number }, number>({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })
// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })
// console.log(mergedObj.name)
// console.log(mergedObj.age)

// Generic constraints
// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, 30)
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })
console.log(mergedObj.name)

interface Lengthy {
  length: number
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value'
  if (element.length === 1) {
    descriptionText = 'Got 1 element'
  } else if (element.length > 0) {
    descriptionText = 'Got ' + element.length + ' elements'
  }
  return [element, descriptionText]
}

// console.log(countAndDescribe(10))
console.log(countAndDescribe('Hi there!'))
console.log(countAndDescribe(['Sports', 'Cooking']))
console.log(countAndDescribe({ name: 'test', length: 1 }))

// keyof
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value ' + obj[key]
}

console.log(extractAndConvert({ name: 'Max' }, 'name'))

// class DataStorage<T> {
class DataStorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  // Has problem with reference types like objects and arrays
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
// textStorage.addItem(10) // Error
textStorage.addItem('Max')
textStorage.addItem('Manu')
textStorage.removeItem('Max')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

// const objStorage = new DataStorage<object>()
// const maxObj = { name: 'Max' }
// objStorage.addItem(maxObj)
// objStorage.addItem({ name: 'Manu' })
// // ...
// objStorage.removeItem(maxObj)
// console.log(objStorage.getItems())

// Generic Utility Types
// Link has more than this two examples
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Partial: is used when you have a type/interface you need to add their values separated
// What it does?: Creates a new type when all the properties are optional
interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal
}

// Readonly: Lock a type to not be changed (readonly)
const names: Readonly<string[]> = ['Max', 'Anna']
// names.push('Manu') // Error when tried to change the value
// names.pop()
