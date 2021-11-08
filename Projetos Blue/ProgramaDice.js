const prompt = require('prompt-sync')();

/*O programa tem que:
• Perguntar quantas rodadas você quer fazer;
• Perguntar quantos jogadores vão jogar;
• Criar um objeto pra cada jogador com nome e número tirado;
• Guarda todos os objetos em uma lista;
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado.
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande
campeão.*/

let rodadas = parseInt(`Quantas rodadas nós vamos jogar?\n`);

let user = parseInt(`Quantos jogadores vão jogar hoje?\n`);
let jogadores = [];

for(i = 0;i < user; i++){

    jogadores.push(jogador&[i])
    console.log(jogadores)
}