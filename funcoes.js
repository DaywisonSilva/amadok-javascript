var idade = 20

function retornaStatusIdade() {
  if (idade > 0 && idade <= 10) {
    return 'você é uma criança'
  } else if (idade > 10 && idade <= 17) {
    return 'você é um adolescente'
  } else {
    return 'você é um adulto'
  }
}

var statusIdade = retornaStatusIdade()

console.log(statusIdade)
