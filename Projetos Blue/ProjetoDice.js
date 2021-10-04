const prompt = require("prompt-sync")();

/*Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.


O programa tem que:

• Perguntar quantas rodadas você quer fazer; (1,0 ponto) OK
• Perguntar quantos jogadores vão jogar; (1,5 pontos) OK
• Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos) OK
• Guarda todos os objetos em uma lista; (2,0 pontos) OK
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado. (2,0 pontos) OK
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande
campeão. (2,0 pontos) OK
*/
console.log(`=====================================================================================`);
console.log(`|                                                                                   |`);
console.log(`|                                                                                   |`);
console.log(`|                               SEJA BEM VINDO                                      |`);
console.log(`|                                    AO                                             |`);
console.log(`|                               JOGO DOS DADOS!                                     |`);
console.log(`|                                                                                   |`);
console.log(`|                                                                                   |`);
console.log(`=====================================================================================`);
console.log();
var rodadas = parseInt(prompt(`Quantas rodadas vamos jogar? `));
console.log(`Perfeito! Ótima escolha de número de rodadas!. Agora vamos precisar que você informe o número de jogadores, ok?`);
console.log();
var num_jog = parseInt(prompt(`Quantos jogadores serão? `));
console.log(`Esse jogo será emocionante! Façam as suas apostas!!`);
console.log()

var lista_jog = [];

for (let j = 0; j < num_jog; j++) {
  var nome = prompt(`Qual o nome do jogador? `);
  console.log();
  let jogador = {
    nome: nome,
    num: Math.floor(Math.random() * 6) + 1,
    vitorias: 0
  };
  lista_jog.push(jogador);
}
//Fazer o numero de rodadas necessário e ordenar pelo maior número do dado de cada jogador, em cada rodada.
for (let i = 0; i < rodadas; i++) {
    lista_jog.sort((a, b) => {
        if (b.num < a.num) {
            return -1;
        } else {
            return true;
        }
    });
    console.log(`=====================================================================================`);
    console.log(`          ${lista_jog[0].nome} tirou ${lista_jog[0].num} no dado. Sendo assim, venceu essa rodada!   `);
    console.log(`=====================================================================================`);
    lista_jog[0].vitorias = lista_jog[0].vitorias + 1;
    for (let k = 0; k < lista_jog.length; k++){
        lista_jog[k].num = Math.floor(Math.random() * 6) + 1
    }
}

//Ordenar pelo número de vitórias
lista_jog.sort((a, b) => {
    if (b.vitorias < a.vitorias) {
        return -1;
    } else {
        return true;
    }
});
console.log(`==============================================================================================`);
console.log(`|                                                                                             |`);
console.log(`|                                                                                             |`);
console.log(`|                                                                                             |`);
console.log(`                          O(A) GRANDE VENCEDOR(A) É ${lista_jog[0].nome} com ${lista_jog[0].vitorias} vitorias        `);
console.log(`|                                                                                             |`);
console.log(`|                                                                                             |`);
console.log(`|                                                                                             |`);
console.log(`==============================================================================================`);

