// import _ from 'lodash'

// // Used when the variable is declared in a vanilla javascript file
// // declare var GLOBAL: string

// // console.log(GLOBAL)

// console.log(_.shuffle([1,2,3]))
// =============================

import 'reflect-metadata'
import { plainToClass } from 'class-transformer'
import { Product } from './product.model'
import { validate } from 'class-validator'

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 },
]

const newProd = new Product('', -5.99)
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log('VALIDATION ERRORS!')
    console.log(errors)
  } else {
    console.log(newProd.getInformation())
  }
})

// const p1 = new Product('A Book', 12.99)

// const loadedProducts = products.map(product => {
//   return new Product(product.title, product.price)
// })
const loadedProducts = plainToClass(Product, products)

for (const product of loadedProducts) {
  console.log(product.getInformation())
}