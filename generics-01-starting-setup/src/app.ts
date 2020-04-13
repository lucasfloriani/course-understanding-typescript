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
