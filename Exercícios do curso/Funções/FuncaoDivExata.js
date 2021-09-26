const prompt = require('prompt-sync')();

//2. Exercício – Treino:  Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true ou false.

function div(x){
    if (x % 3 === 0){
        return true
    } else{
        return false
    }
}

x = parseFloat(prompt(`Escolha um número para verificar se ele é divisível por 3 ou não: `));
console.log(div(x));