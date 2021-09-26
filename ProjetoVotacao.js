const prompt = require('prompt-sync')();

/*A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até este momento.

O programa tem que:

Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto) OK
Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos) OK
Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", 
caso o voto não possa ser contabilizado; (2,0 pontos) OK
Contabilizar os votos de acordo com os significados (3,0 pontos): OK
1 = Candidato 1
2 = Candidato 2
3 = Candidato 3
4 = Voto Nulo`
5 = Voto em Branco
Ter uma função chamada exibirResultados() que deve mostrar: (2,0 pontos) ok
 - O total de votos para cada candidato 
 - O total de votos nulos
 - O total de votos em branco
 - Qual candidato venceu a votação*/

 
    let candidato_1 = {
        nome: `Candidato 1`,
        cont_voto: 0
    }

    let candidato_2 = {
        nome: `Candidato 2`,
        cont_voto: 0
    }

    let candidato_3 = {
        nome: `Candidato 3`,
        cont_voto: 0
    }

    let nulo = {
        nome: `Nulo`,
        cont_voto: 0
    }

    let branco = {
        nome: `Branco`,
        cont_voto: 0
    }


    function autorizarVoto(anoNascimento){
        if (anoNascimento > 2002){
            return `NEGADO!`
        } else if( anoNascimento >= 1961 && anoNascimento <= 2002){
            return `OBRIGATÓRIO!`
        } else {
            return `OPCIONAL!`
        }
    }

    function votacao(autorizacao, voto){
        if(autorizacao === `NEGADO!`){
            return `Você não pode votar!`
        } else if (autorizacao !== `NEGADO!` && voto === 1){
            candidato_1.cont_voto = candidato_1.cont_voto + 1
        } else if (autorizacao !== `NEGADO!` && voto === 2){
            candidato_2.cont_voto = candidato_2.cont_voto + 1
        } else if (autorizacao !== `NEGADO!` && voto === 3){
            candidato_3.cont_voto = candidato_3.cont_voto + 1
        } else if (autorizacao !== `NEGADO!` && voto === 4){
            nulo.cont_voto = nulo.cont_voto + 1
        } else if (autorizacao !== `NEGADO!` && voto === 5){
            branco.cont_voto = branco.cont_voto + 1
        }
    }

    function exibirResultados(){
        console.log();
        for (let i=0; i <= 2; i++){
            console.log(`O número de votos do candidato ${[i+1]} foi de ${lista_result[i].cont_voto}`);
        }

        lista_result.sort((a, b) => {
            if (b.cont_voto < a.cont_voto) {
                return -1;
            } else {
                return true;
            }
        });

            console.log(`A quantidade de votos nulos foi ${nulo.cont_voto}`);
            console.log(`A quantidade de votos em branco foi ${branco.cont_voto}`);
            console.log(`O candidato que venceu a eleição foi o ${lista_result[0].nome}`);
    }
    
    let lista_votacao = [candidato_1.nome, candidato_2.nome,candidato_3.nome,nulo.nome,branco.nome];
    var lista_result = [candidato_1,candidato_2,candidato_3];
    let anoNascimento = prompt(`Olá, qual o seu ano de nascimento? Escreva no formato (AAAA): `);
    console.log(autorizarVoto(anoNascimento));
    do{
    let voto = parseInt(prompt(`De acordo com a lista ${lista_votacao} qual em qual opção você vota?! Digite 1,2,3,4, ou 5 de acordo com a posição que a sua opção ocupa na lista: `));
    votacao(autorizarVoto(anoNascimento),voto);
        
        if (autorizarVoto(anoNascimento) === `NEGADO!`){
            console.log(`Você não está autorizado a votar, vamos encerrar o programa por aqui!`)
            break;
        }else{
        console.log(`Ótimo! Seu voto foi contabilizado!`)
        var repetir = (prompt(`Deseja votar novamente? Sim ou Não `).toLowerCase());
        }
    }   while (repetir === "sim");

exibirResultados();
    
