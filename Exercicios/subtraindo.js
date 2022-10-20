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


