const prompt = require('prompt-sync')();

console.log("Exercício 2")
console.log("")
let nome = prompt("Digite o seu nome: ");
let end = prompt("Digite seu endereço: ");
let cep = prompt("Digite o seu CEP: ");
let tel = prompt("Digite o seu telefone: ");
console.log("")
console.log(`Seu nome é: ${nome}`);
console.log(`Seu endereço é na: ${end}`);
console.log(`O CEP da sua rua é: ${cep}`);
console.log(`O seu número de telefone é: ${tel}`)