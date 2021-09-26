const prompt = require('prompt-sync')();

//Exercício Treino 3 - Crie uma função que receba uma string como argumento e retorne a mesma string em letras maiúsculas. Faça uma chamada à função, passando como parâmetro uma string.

function Palavra(x){
    x = prompt(`Digite uma palavra: `);
    return x.toUpperCase()
}

console.log(Palavra())