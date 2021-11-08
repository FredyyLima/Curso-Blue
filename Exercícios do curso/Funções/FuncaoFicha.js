const prompt = require('prompt-sync')();

/*Exercício 5 - Faça um programa que tenha uma função chamada ficha(), que receba dois parâmetros: o nome de um jogador e quantos gols ele marcou.
O programa deverá ser capaz de mostrar a ficha do jogador, mesmo que algum dado não tenha sido informado corretamente.*/

function ficha(nome,gols){
    nome = prompt(`Qual o nome do jogador? `);
    gols = prompt(`Quantos gols ele marcou durante a carreira dele? `);

    if (nome !== `` && gols !== ``){
        console.log(`O nomde do jogador é: ${nome}`);
        console.log(`${nome} marcou ${gols} gols durante a sua carreira.`);
    } else{
        console.log(`Apesar dos dados não terem sido inseridos corretamente, vamos apresentar os dados que temos armazenados:`);
        console.log(`O nomde do jogador é: ${nome}`);
        console.log(`${nome} marcou ${gols}gols`);
    }
}

console.log(ficha());