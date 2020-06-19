let ls = require("readline-sync")

let peso = ls.question('Qual o seu peso?')
let altura = ls.question('Qual a sua altura?')

if (peso > 500) {
    console.log('Por favor digite um peso valido!')
} else if (altura > 3.00) {
    console.log ('Digite uma altura valida')
} else {
    let calculaIMC = peso/(altura * altura)
    console.log ('Seu IMC é ' + calculaIMC)
}


