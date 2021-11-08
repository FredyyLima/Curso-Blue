const prompt = require('prompt-sync')();

/*Exercício 4 - Crie um programa que tenha uma função chamada voto () que vai receber como parâmetro o ano de nascimento de uma pessoa, 
retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATORIO nas eleições.*/

function voto(x){
    if (x >= 2000){
        console.log(`Pela sua idade o seu voto foi: NEGADO!`);
    } else if( x > 1950 && x < 2000){
        console.log(`Pela sua idade o seu voto é: OBRIGATÓRIO!`)
    } else if( x < 1950){
        console.log(`Pela sua idade o seu voto é: OPCIONAL!`)
    } else{
        console.log(`Digite um ano válido com os 4 dígitos!`)
    }
}

let user = voto(prompt(`Por favor, digite o ano de seu nascimento para saber seu tipo de voto: `));

console.log(user)