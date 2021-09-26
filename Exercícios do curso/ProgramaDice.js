const prompt = require('prompt-sync')();

/*O programa tem que:
• Perguntar quantas rodadas você quer fazer; OK
• Perguntar quantos jogadores vão jogar; OK
• Criar um objeto pra cada jogador com nome e número tirado;
• Guarda todos os objetos em uma lista; OK
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado.
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande
campeão.*/

let rodadas = parseInt(prompt(`Quantas rodadas nós vamos jogar?`));

let user = parseInt(prompt(`Quantos jogadores vão jogar hoje?\n`));
let jogadores = {};

for(i = 0;i < user; i++){

    let jogador = {
        nome: `Jogador`+`-`+ i+1,
        num: 0
    }
}
console.log(this.nome)


