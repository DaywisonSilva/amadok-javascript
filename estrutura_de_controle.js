var numero = 11

// if (numero % 2 === 0) {
//   console.log('O número é par')
// } else if (numero > 10) {
//   console.log('O número é maior que 10')
// } else {
//   console.log('O número é ímpar')
// }

if (numero % 2 === 0) {
  console.log('O número é par')
} else if (numero % 2 === 1) {
  console.log('O número é ímpar')
}

// if (numero % 2 === 1) {
//   console.log('O número é ímpar')
// }

// SWITCH - CASE
var idade = 17

switch (idade) {
  case 10: {
    console.log('Você é uma criança')
    break
  }

  case 18: {
    console.log('Você atingiu a maior idade')
    break
  }

  default: {
    console.log('Idade não reconhecida')
  }
}
