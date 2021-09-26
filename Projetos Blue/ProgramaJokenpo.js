const prompt = require('prompt-sync')();

let opcao = ["","Pedra","Papel","Tesoura"];
let ponto_u = 0;
let ponto_c = 0;
let restart = `sim`;

console.log(`Seja bem vindo ao Jokenpô. Vamos começar do começo...`);

while ((restart === `sim`) || (restart = `s`)){
  let rodadas = +prompt("quantas rodadas nós vamos jogar? ");

  for (let i = 1; i <= rodadas; i++){
    let user = +prompt("Escolha uma opção: 1 - Pedra; 2 - Papel; 3 - Tesoura: ");

    while (user >= 1 || user <= 3){
      if (user === 1){
        user = opcao[1];
      } else if (user === 2){
        user = opcao[2];
      } else if (user === 3){
        user = opcao[3];
      } else {
        console.log(`Você digitou uma opção inválida. Tente novamente`);
        user = +prompt("Escolha uma opção: 1 - Pedra; 2 - Papel; 3 - Tesoura: ");
      }
    }
    let comp = Math.floor(Math.random()*(3));

      if (comp === 1){
        comp = opcao[1];
      } else if (comp === 2){
        comp = opcao[2];
      } else{
        comp = opcao[3];
      }

    if ((user === `Pedra` && comp === `Tesoura`)||(user === `Tesoura` && comp === `Papel`)||(user === `Papel` && comp === `Pedra`)){
      console.log();
      console.log("Parabéns! Você ganhou!");
      console.log(`Você escolheu: ${user}`);
      console.log(`O computador escolheu: ${comp}`);
      console.log();
      ponto_u = ponto_u + 1
      ponto_c = ponto_c
      console.log(" ----------------------------");
      console.log("|      PLACAR PARCIAL        |");
      console.log("|                            |");
      console.log(`|     Você: ${ponto_u} pontos         |`);
      console.log(`|     Comp: ${ponto_c} pontos         |`);
      console.log("|                            |");
      console.log("|                            |");
      console.log(" ----------------------------");
    } else if(user === comp){
      console.log();
      console.log("Vocês empataram! que pena, nessa rodada ninguém pontuou!");
      console.log(`Você escolheu: ${user}`);
      console.log(`O computador escolheu: ${comp}`);
      console.log();
      ponto_u = ponto_u
      ponto_c = ponto_c
      console.log(" ----------------------------");
      console.log("|      PLACAR PARCIAL        |");
      console.log("|                            |");
      console.log(`|     Você: ${ponto_u} pontos         |`);
      console.log(`|     Comp: ${ponto_c} pontos         |`);
      console.log("|                            |");
      console.log("|                            |");
      console.log(" ----------------------------");
    } else{
      console.log();
      console.log("Mas que pena, você perdeu :(");
      console.log(`Você escolheu: ${user}`);
      console.log(`O computador escolheu: ${comp}`);
      console.log();
      ponto_u = ponto_u
      ponto_c = ponto_c + 1
      console.log(" ----------------------------");
      console.log("|      PLACAR PARCIAL        |");
      console.log("|                            |");
      console.log(`|     Você: ${ponto_u} pontos         |`);
      console.log(`|     Comp: ${ponto_c} pontos         |`);
      console.log("|                            |");
      console.log("|                            |");
      console.log(" ----------------------------");
    }
  }
  console.log();
  if (ponto_u > ponto_c){
      console.log(`Parabéns você foi o grande campeão!!`);
      console.log();
      console.log(" ----------------------------");
      console.log("|      PLACAR FINAL          |");
      console.log("|                            |");
      console.log(`|     Você: ${ponto_u} pontos         |`);
      console.log(`|     Comp: ${ponto_c} pontos         |`);
      console.log("|                            |");
      console.log("|                            |");
      console.log(" ----------------------------");
    } else if (ponto_u < ponto_c){
      console.log(`Vá para a casa quieto, pois hoje o GRANDE CAMPEÃO SOU EU!!`);
      console.log();
      console.log(" ----------------------------");
      console.log("|      PLACAR FINAL          |");
      console.log("|                            |");
      console.log(`|     Você: ${ponto_u} pontos         |`);
      console.log(`|     Comp: ${ponto_c} pontos         |`);
      console.log("|                            |");
      console.log("|                            |");
      console.log(" ----------------------------");
    } else{
      console.log(`DRAMAAAAAAATICA A SITUAÇÃO!!! TEMOS UM EMPATE!`);
      console.log();
      console.log(" ----------------------------");
      console.log("|      PLACAR FINAL          |");
      console.log("|                            |");
      console.log(`|     Você: ${ponto_u} pontos         |`);
      console.log(`|     Comp: ${ponto_c} pontos         |`);
      console.log("|                            |");
      console.log("|                            |");
      console.log(" ----------------------------");
    }
    restart = (prompt(`Você deseja jogar novamente? Sim ou Não: `).toLowerCase());
    if ((restart === `nao` || restart === `n`) && ponto_u >= ponto_c){
        console.log(`Tudo bem, volte amanhã para eu tentar ganhar de você!`);
        break
    } else if ((restart === `nao` || restart === `n`) && ponto_u < ponto_c){
      console.log(`Bem que eu imaginei, depois dessa surra que eu te dei, é melhor ir pra cas descansar mesmo!`);
        break
    }
}
