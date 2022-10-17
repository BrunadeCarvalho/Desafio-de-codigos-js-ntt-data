// Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

let a=5
let N=20
let c= N / a

const valores=[]
let soma=0

for(let i = 0; i<=c; i++){
    const multi = i*a
    valores.push(multi)
    const valor = valores[i]
    soma = soma + valor
}

console.log(soma)

