const prompt = require('prompt-sync')();

//Exercício Treino 2 - Escreva uma função que recebe dois números (a e b) como parâmetro e retorna True caso a soma dos dois seja maior que um terceiro parâmetro, chamado limite.

function valores(x,y,z){
        z = prompt(`Estabelça um limite para essa function!`);

        if ((x+y)> z){
            return true
        } else{
            return false
        }

}

console.log(valores(2,2))

