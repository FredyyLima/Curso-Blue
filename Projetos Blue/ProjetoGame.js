const prompt = require("prompt-sync")();
    /*
    Jogo de Ficção Interativa

    O que é ficção interativa?
    Ficção interativa, geralmente abreviada como IF, é um software de emulação de
    ambientes no qual os jogadores usam comandos de texto para controlar
    personagens do jogo e influenciar o ambiente.

    Escopo do projeto
    Crie um jogo de ficção interativa que simule a rotina diária de um personagem.
    Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de
    estudos, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu
    personagem e o conduza durante o seu dia.
    Cada escolha irá gerar uma consequência diferente para o seu personagem. O
    jogo acaba quando o dia do seu personagem acabar. Você será responsável por
    determinar o inicio e término do dia do seu personagem, além de avançar o
    tempo a cada escolha.
    É obrigatório o uso de orientação a objetos e herança, funções, laços (while/for)
    e condicionais (if, elif, else), ou seja todo o conteúdo visto durante o módulo.
    Use toda sua criatividade para desenvolver uma história interessante e seja bem
    específico com relação as escolhas que precisam ser feitas, para que seu jogo
    seja divertido!
    Os codelabs 19 (09/09) e 22 (14/09) serão destinados para desenvolvimento do
    projeto.
    O jogo deverá ser entregue no dia 15/09/2021 até as 18:59, ou seja, antes do
    inicio da aula.

    procurar o video do tibia que conta uma história para usar como base.
    */

    /*async function joinString(string1, string2){
        await joinString("Blue","Edtech").then()

    }*/

    function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }    
    const juca = `Juca: `
    var eo = {
        nome: `Eo Fyragos`,
        vitalidade: 100,
        vida: 3,
        mochilaEo: mochila,
        atk: parseInt(Math.floor(Math.random() * 6) + 1)
    }

    var cydros = {
        nome: `Cydros`,
        vitalidade: 250,
        vida: 1,
        atk: parseInt(Math.floor(Math.random() * 6) + 1)
    }
    var dnv = 0
    var personagem = [eo,cydros]
    var mochila = [];
    function objetos(x){
        let lista = {};
        lista.nome = x,
        lista.qnt = 0
        mochila.push(lista);
    }

    class Animais {
        constructor(nome2, utilidade){
            this.nome2 = nome2;
            this.utilidade = utilidade;
    }
    }
    class Peixe extends Animais{
        constructor(nome2, utilidade, vitalidadeP){
            super(nome2, utilidade);
            this.nome2 = nome2;
            this.utilidade = utilidade;
            this.vitalidadeP = vitalidadeP; //Quando o player come um peixe é essa a quantidade de vitalidade que ele ganha.
        }
        sons(){
         console.log(`Glub! Glub! Glub! Glub! Glub! Glub!`);
        }
        pescar(){
            var pesc = parseInt(Math.floor(Math.random() * 6) + 1);
            if (pesc >= 5){
                console.clear()
                console.log(`SPLASH! SPLASH! SPLASH! SPLASH! SPLASH!`);
                console.log(`${juca}Parabéns! Você pescou um Bagri.`);
                objetos(this.nome2);
                mochila[0].qnt++
            } else {
                console.clear()
                this.sons();
                console.log(`${juca}Você não pescou nada, tente novamente!`);
            }
        }
    }
    class Cavalo extends Animais{
        constructor(nome2, utilidade, stamina){
            super(nome2, utilidade)
            this.nome2 = nome2;
            this.utilidade = utilidade;
            this.stamina = stamina;
        }
        montar(){
            return console.log (`${this.nome2} VEM CÁ MEU FIO! VAMO NESSA!`);
        }
        cavalgar(){
            return console.log(`PoCoTó!...PoCoTó...PoCoTó!...PoCoTó...PoCoTó!...PoCoTó!`);
        }
        alimentar(){
            if (this.stamina === 100){
                console.log(`${juca}O ${this.nome2} não está mais com fome. A sua stamina já chegou em ${this.stamina}`);
            } else{
                console.clear()
            console.log(`Crunch...Crunch...Crunch...Crunch...`);
            this.stamina = this.stamina + 10
            }
        }
    }

let fish = new Peixe("Bagri","Alimento",10);
let horse = new Cavalo(`Hilux`,`Transporte`,10);

function intro(){
    return console.log(`${juca}Bem... Agora que você já foi apresentad${art} ao jogo, vamos te apresentar ao seu personagem durante essa jornada.`);
    
}

function battle(){
   do {
        personagem.sort((a, b) => {
            if (b.atk < a.atk) {
                return -1;
            } else {
                return true;
            }
        });
        if (personagem[0].atk === personagem[1].atk){
            console.log(`${juca}Essa foi por pouco, ambos desviaram os ataques`);
             }else{
            console.log(`${juca}${personagem[0].nome} atacou com sucesso o ${personagem[1].nome}`)
            personagem[1].vitalidade = personagem[1].vitalidade - 20;
            console.log(`${juca}${personagem[1].nome} perdeu 20 pontos de vitalidade, só lhe restando ${personagem[1].vitalidade}`);
             }
            let comer = ""
            let cont_comer = ""
            if (mochila[0].qnt > 0 && personagem[0].atk != personagem[1].atk){
              if (eo.vitalidade >=10 && eo.vitalidade <= 50){
                comer = prompt(`${juca}Você deseja comer um peixe para recuperar a sua vitalidade? Sim ou Não: `)
                if (comer.toLowerCase() === "sim" || comer.toLowerCase() === "s"){
                  do{
                    mochila[0].qnt = mochila[0].qnt - 1
                    console.log(`Você utilizou 1 Peixe, você ainda tem: ${mochila[0].qnt} Peixes`);
                    console.log(`${juca}Você comeu um Bagri! Sua vitalidade aumentou em ${fish.vitalidadeP} pontos`);
                    eo.vitalidade = eo.vitalidade + fish.vitalidadeP
                      if (mochila[0].qnt <= 0){
                        console.log(`${juca}Você não tem mais peixes para comer. Boa sorte!`);
                        break
                      }
                    cont_comer = prompt(`${juca}Você quer comer outro peixe? Sim ou Não: `);
                  } while (cont_comer.toLowerCase() === "sim");
                } else{
                  console.log(`${juca}Você não quer comer agora, tudo bem. Mas fique de olho na sua vitalidade, se ela chegar a 0 você perderá uma vida.`);
                }
            }
        }
                  if (eo.vitalidade <= 0){
                  eo.vida = eo.vida - 1
                  console.log(`${juca}Eo perdeu uma vida. Agora só lhe restam ${eo.vida} vidas`);
                  eo.vitalidade = 100
                }else if(cydros.vitalidade <= 0){
                  cydros.vida = cydros.vida - 1
                  console.log(`${juca}Cydros foi morto por Eo! Chegou o fim dos tempos sombrios no mundo!`);
                  sleep(2000);
                  console.log(`${juca}Parabéns guerreiro! você erradicou o mal na Terra, agora teremos longos anos de Paz. Obrigado!`)
                 }
        
        sleep(4000);
        console.clear();
        for (let k = 0; k < personagem.length; k++){
           personagem[k].atk = Math.floor(Math.random() * 6) + 1
        }
    } while (eo.vida >= 1 && cydros.vida >= 1);
      if(eo.vida === 0){
      console.log(`${juca}Infelizmente, mesmo com muito treino Cydros ainda é muito mais forte que Eo. Agora que Eo está morto, 
      o nosso mundo está fadado a viver dias de intensa escuridão. Boa sorte para nós!`)
    }
   }

  function passeioApe() {
    var y = 0;
    do {
      y++;
      console.log(`Caminhando e cantando e seguindo a canção...`);
      sleep(1000);
    } while (y < 10);
  }

  function passeio() {
    if (opt3 === 1){
      console.log(`${juca}Você não alimentou o seu cavalo suficientemente, é melhor fazer isso antes de começar a sua jornada.`);
      conhecerCavalo();
    }
    var x = 1;
    do {
      x++;
      horse.cavalgar();
      horse.stamina = horse.stamina - 10
        if (horse.stamina <= 0){
          console.log(`${juca}Você não alimentou o seu cavalo adequadamente, abandone-o aqui mesmo e siga a pé!`);
          passeioApe();
          break
        }
      sleep(1000);
    } while (x < 10);
  }

console.log(`Seja bem vindo ao fantástico mundo do Tibia Cover! Eu sou o Juca da'Mursilha e serei o seu narrador através dessa aventura.
Nesse simples programa iremos viver a história de um personagem chamado Eo Fyragos que teve a sua história contada em um curtametragem postado no youtube.`);
console.log();
console.log(`Esse jogo é movido a números, sempre que você precisar fazer uma escolha, perceba que as opções ofertadas terão números ao lado para indicar a sua escolha. Mas em alguns momentos, posso te pedir para escrever Sim ou Não, fique atento.`);
console.log();
const nome = prompt(`Qual o seu nome? `);
        let art = parseInt(prompt(`Você é homem(1) ou mulher(2)? Responda com os números, por favor. `));

        if (art === 1){
            art = `o`
        } else {
            art = `a`
        };
    
    sleep(2000);
    intro();    
    console.log();
    console.log(`${juca}Antes tudo, você precisa saber... Nesse jogo o peixe tem um valor inestimável, por isso, quando tiver a chance, pesque o máximo de peixes que conseguir. Dica do Tio Juca.`);
    sleep(4000);
    console.log();
   console.log(`${juca}Eo Fyragos, é um rapaz de origem camponesa, um garoto do bem. Gosta de lidar com os animais, de tomar banho no rio e de passear com a sua namorada Yakena.
Eo não tem habilidades com magia e muito menos com a espada, além de que a sua estatura é franzina.`);
console.log();
    console.log(`${juca}O dia amanheceu e ainda são 5:00 AM... Não se assuste, isso é normal no sítio onde o Eo mora.`);
    let opt1 = parseInt(prompt(`${juca}Agora nós precisamos começar o dia. O que você quer fazer primeiro? (1) Pescar ou (2) Alimentar o Cavalo: `));
console.log();
        if (opt1 === 1){
            do{
                fish.pescar();
                dnv = parseInt(prompt(`${juca}Quer pescar novamente? (1) Sim ou (2) Não: `));
                console.log();
                    if (dnv === 2){
                        console.log(`${juca}Certo. Então agora vamos conhecer o seu cavalo.`);
                        console.log();
                        conhecerCavalo();
                    }
            } while (dnv === 1)
        } else if (opt1 === 2){
            do{
            horse.alimentar();
            console.log(`${juca}A stamina máxima do Hilux é 100. No momento ele está com ${horse.stamina}`);
            dnv = parseInt(prompt(`${juca}Quer alimentar o cavalo novamente? (1) Sim ou (2) Não: `));
        } while (dnv === 1);
        }

        var dnv1 = ""
        if (opt1 === 2 ){
          console.log();
          console.log(`${juca}Vi que você não pescou nenhum peixe ainda! Os peixes são importantes para que recupere a sua vitalidade, caso precise. Quanto mais peixes melhor.`);
          prompt(`${juca}Vamos começar a pescar então. Pressione qualquer tecla para continuar.`);
          do{
                fish.pescar();
                dnv1 = parseInt(prompt(`${juca}Quer pescar novamente? (1) Sim ou (2) Não: `));
                console.log();
                    if (dnv1 === 2){
                        console.log(`${juca}Certo. Então agora vamos continuar com o seu dia.`);
                        console.log();
                    }
            } while (dnv1 === 1);
        }

        var dnv2 = ""
        if(mochila[0].qnt >= 1 && mochila[0].qnt <= 5){
              let cont = parseInt(prompt(`${juca}Vi que você só tem ${mochila[0].qnt} peixes, tem certeza que quer continuar sua jornada só com essa quantidade? (1)Sim ou (2)Não.`));
                if (cont === 1){
                  console.log(`${juca}Tudo bem então, boa sorte!`);
                } else if (cont === 2){
                  console.log(`${juca}Ótima escolha! Vamos pescar então...`);
                  console.log()
                  prompt(`${juca}Vamos começar a pescar então?`);
                  do{
                      fish.pescar();
                      dnv2 = parseInt(prompt(`${juca}Quer pescar novamente? (1) Sim ou (2) Não: `));
                      console.log();
                        if (dnv2 === 2){
                            console.log(`${juca}Certo. Então agora vamos continuar com o seu dia`);
                            console.log();
                        }
                      } while (dnv2 === 1);
                }
        }

      var opt3 = 0
      function conhecerCavalo(){
            console.log(`${juca}Esse é o Hilux, o fiel escudeiro do Eo. Juntos eles já se divertiram muito e conheceram muitos lugares. Yakena, adora passear com o Hilux`);
            console.log(`${juca}Antes de tirarmos o Hilux do estábulo, precisamos alimentar ele! Até que ele fique com a Stamina no máximo, caso contrario teremos que abandoná-lo no meio do caminho e seguir a pé em nossa aventura.`);
            console.log();
            var opt2 = parseInt(prompt(`${juca}Você quer alimentar o Hilux? (1) Sim ou (2) Não: `));
            let dnv = 0
            if (opt2 === 1){
                do{
                    horse.alimentar()
                    dnv = parseInt(prompt(`${juca}Quer alimentar o cavalo novamente? (1) Sim ou (2) Não: `));
                    console.log(`${juca}A stamina máxima do Hilux é 100. No momento ele está com ${horse.stamina}`);
                } while (dnv === 1);
                
            } else if (opt2 === 2){
                console.log(`${juca}Certo, então vamos tentar outra hora. Mas lembre-se, o Hilux é seu escudeiro, ele precisa de cuidados.`);
                opt3 = 1
            }
            }
        
    console.log();
    console.log(`${juca}Seus amigos marcaram um piquenique no Pântano de Venore, vamos pegar o Hilux para buscar a Yakena e depois ir para o pequenique`);
 horse.montar();
 sleep(1000);
 passeio();


console.clear();
console.log(`${juca}Enquanto todos estavam felizes no piquenique, Eo e Yakena namorando feito dois pombinhos apaixonados. Seus amigos se deliciando com as comidas que trouxeram e o Spike,
cachorro do seu amigo Earl, corria pra lá e pra cá!`);
sleep(15000);
console.clear();
console.log(`${juca}Chega de repente no local onde eles estavam, um mago maligno, super poderoso, chamado Cydros! Cydros era mundialmente conhecido por ser o maior assassino de todos os tempos,
ele não tinha sentimentos e não perguntava o nome de suas vítimas, ele simplesmente tirava suas vidas para o seu divertimento e fortalecimento mágico!`);
sleep(15000);
console.clear();
console.log(`${juca}Com Eo e seus amigos, não foi diferente. Cydros começou a ceifar a vida de todos, um a um. Só restou uma única opção para esse grupo de camponeses indefesos, CORRER!
Eles correram muito, mas infelizmente todos morreram, menos Eo! Que conseguiu escapar gravemente ferido.`);
sleep(15000);
console.clear();
console.log(`${juca}Eo ficou arrasado com tudo o que tinha acontecido e só o que restou para ele fazer, foi afogar as magoas na bebida.
Um tempo se passou e ele virou freguês do bar subterrâneo da cidade de Venore.`);
sleep(15000);
console.clear();
console.log(`${juca}Um belo dia, Eo encontrou um guerreiro viajante que também tinha sido um sobrevivente de um ataque de Cydros! Comovido com a história de Eo, 
Master Ticolas resolveu ajuda-lo e se propôs a treina-lo na arte da guerra.`);
sleep(15000);
console.clear();
console.log(`${juca}Foram anos de treinamento! Eo, já não era mais franzino, tinha muitos musculos e embainhava uma espada milenar que ganhara quando ajudou os Trolls do pantano 
na guerra contra os Trolls do gelo.`);
sleep(15000);
console.clear();
console.log(`${juca}Chegou o grande momento, esperado por muitos anos, o confronto final! O dia da vingança de Eo!`);
console.log(`${juca}Eo Fyragos contra Cydros, o mago maligno`);
sleep(10000);
console.clear();
battle();