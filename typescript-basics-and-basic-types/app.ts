// unknown é mais restrito que o any, onde o any desliga a verificação do tipo da variávvel, e ja o unknown não,
// precisando assim verificar antes o tipo da variavel para dai atribuila a outra
// Melhor que type any

let userInput: unknown
let userName: string

userInput = 5
userInput = 'Max'
if (typeof userInput === 'string') {
  userName = userInput
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
  // nem chega na etapa de retornar undefined por causa do throw, logo o retorno é do type never
}

const result = generateError('An error ocurred!', 500)
console.log(result)