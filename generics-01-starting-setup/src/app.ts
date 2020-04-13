// Array is a Generic
// const names: Array<string> = ['Max', 'Manuel'] // string[]
const names: Array<string> = ['Max', 'Manuel']
// names[0].split(' ')

// const promise: Promise<any> = new Promise((resolve, reject) => {
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 2000)
})

promise.then(data => {
  // data.split(' ')
})
