let entrada = 6
let pi = 3.14159265358979323846;


let raio = (entrada * Math.sqrt(3))/3
let elevacao = Math.pow(raio,2)

let area = (pi * elevacao).toFixed(2)
console.log(`A area da circunferencia eh ${area}`)
