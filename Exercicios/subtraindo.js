// Dado um número inteiro ( n ) , retorne a diferença entre o produto de seus dígitos e a soma de seus dígitos.
//Explicação: 
/* Produto de dígitos = 2 * 3 * 4 = 24
Soma dos dígitos = 2 + 3 + 4 = 9
Resultado = 24 - 9 = 15 */


let lines = 234
let string= lines.toString();
let separacao = string.split("")

//reduce - intera sob o array para somar os valores dele.
const soma = separacao.reduce((acumulado, valorAtual)=>{
    return acumulado + Number(valorAtual)
},0)

const multiplicacao=separacao.reduce((acumulado, valorAtual)=>{
    return acumulado * Number(valorAtual)
},1)

const resultado = multiplicacao - soma
console.log(resultado)


