const prompt = require('prompt-sync')();

//3.	Exercício – Treino: Faça um programa que tenha uma função chamada área (), que receba as dimensões de um terreno retangular (largura e comprimento) 
//e mostre a área do terreno.

function area(x,y){
    return x*y
}

x = parseFloat(prompt(`Digite o comprimento do terreto: `));
y = parseFloat(prompt(`Digite a largura do terreno: `));
console.log();
console.log(`A área do terreno é de ${area(x,y)} metros quadrados.`);