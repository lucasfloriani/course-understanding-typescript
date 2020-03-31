// unknown é mais restrito que o any, onde o any desliga a verificação do tipo da variávvel, e ja o unknown não,
// precisando assim verificar antes o tipo da variavel para dai atribuila a outra
// Melhor que type any
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // nem chega na etapa de retornar undefined por causa do throw, logo o retorno é do type never
}
var result = generateError('An error ocurred!', 500);
console.log(result);
