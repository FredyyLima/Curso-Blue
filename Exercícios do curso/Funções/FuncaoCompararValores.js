const prompt = require('prompt-sync')();

//Exercício Treino 1 - Escreva uma função que recebe dois parâmetros (números) e imprime o menor dos dois. Se eles forem iguais, imprima que são valores idênticos.

function comparar(x,y){
    if (x===y){
        return console.log(`Os valores são idênticos!`);
    } else if(x < y){
        return x
    } else{
        return y
    }

}

console.log(comparar(1,2))
console.log(comparar(2,3))
console.log(comparar(2,2))