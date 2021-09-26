const prompt = require("prompt-sync")();
/*
PROJETO: Gastos com viagem -  Escrever uma aplicação utilizando funções que calcule os gastos com passagem, 
hospedagem, aluguel de carro e gastos extras de uma viagem para uma determinada cidade.
Hospedagem
1 - Crie uma função chamada 'custo_hotel' que receba um parâmetro (argumento) chamado 'noites' e retorne o custo 
total do hotel, sendo que 1 noite custa R$ 140,00.
Passagem
2 - Crie uma função chamada 'custo_aviao' que receba o nome da cidade e retorne o custo da passagem de avião, 
sendo que passagem para:
- São Paulo custa R$ 312,00;
- Porto Alegre custa R$ 447,00;
- Recife custa R$ 831,00;
- Manaus custa R$ 986,00.
Aluguel de Carro
3 - Crie uma função chamada 'custo_carro' que receba um parâmetro chamado 'dias'.
- Calcule o custo do aluguel do carro sendo que:
- A cada dia o carro custa R$ 40,00;
- Alugando 7 dias ou +: R$ 50,00 de desconto;
- Alugando 3 dias ou +: R$ 20,00 de desconto;
- Você pode receber apenas um desconto;
- Retorne o custo.
Cálculo Total
4 - Agora com essas três funções criadas, declare uma função que receba a cidade e quantidade de dias e retorne 
o custo total da viagem.
- Reutilize as funções já criadas.
- Exiba o total da viagem chamando apenas a nova função declarada!
Gastos Extras
5 - Modifique essa nova função criada e adicione um terceiro argumento: 'gastos_extras' e some esse valor ao 
total da viagem.
Exiba no console o custo total de uma viagem de 12 dias para 'Manaus' gastando R$ 800,00 adicionais.
*/
let lista_cidades = [`São Paulo`, `Porto Alegre`, `Recife`, `Manaus`];
var extra = 0

    function custo_hotel(noites) {
    return noites * 140;
    }

    function custo_aviao(cidade) {
    if (cidade === lista_cidades[0]) {
        return 312.00;
    } else if (cidade === lista_cidades[1]) {
        return 447.00;
    } else if (cidade === lista_cidades[2]) {
        return 831.00;
    } else if (cidade === lista_cidades[3]) {
        return 986.00;
    }
    }

    function custo_carros(dias){
        if(dias < 3){
            return (dias*40)
        } else if(dias >=3 && dias <=6){
            return (dias*40)-20
        } else if(dias >= 7){
            return (dias*40)-50
        }
    }

function custo_viagem(x,y,z,w){
    return (custo_hotel(noites)+custo_aviao(cidade)+custo_carros(dias)+extra)
}

console.log(`Seja bem-vindo ao programador de viagens! Esse programa te ajuda a programar financeiramente toda a sua viagem.`)
console.log()
noites = parseInt(prompt(`Quantos dias vai ficar viajando? `))
console.log();
cidade = prompt(`Para qual dessas cidades você pretende viajar? ${lista_cidades}: `)
console.log();
dias = noites
console.log();
extra = parseFloat(prompt(`Em uma viagem sempre precisamos reservar um valor para despesas extras, ou até mesmo para uma emergência durante a viagem. Quanto você pretende reservar para isso? `))
console.log();
console.log(`Vamos agora apresentar os gastos discriminados para essa viagem que você escolheu:`);
console.log();
console.log(`O seu custo com hotel, para ${noites} dias viajando é de R$${custo_hotel(noites)},00`);
console.log();
console.log(`O seu custo com passagem áerea para a cidade de ${cidade} é de: R$${custo_aviao(cidade)},00`);
console.log();
console.log(`O seu custo com aluguel de carro para os ${noites} dias é de: R$${custo_carros(dias)},00 já considerando o desconto, caso tenha.`);
console.log();
console.log(`Esse é o valor que você estipulou para custos extras durante a viagem: R$${extra},00`);
console.log();
console.log(`O custo total dessa viagem é de R$${custo_viagem()},00`);