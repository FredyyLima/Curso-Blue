const prompt = require('prompt-sync')();

/*1. Crie um programa que leia o preço e a quantidade de um produto a ser
comprado, calculando o total da compra, guarde essas informações em um objeto.
Se o valor todal da compra for maior que R$ 1000,00 de o desconto de 10%, se for
entre R$ 4000,00 e R$ 5000,00, dê 15% de desconto, se for acima de R$ 5000,00, dê
20% de desconto. No final mostre ao cliente a quantidade, o preço do produto e o
valor total de sua compra, considerando o desconto dado. Não se esqueça de
alterar o valor total no objeto.*/

var produtos = { nome: [``,`Macbook Pro`,`Iphone X`, `AirPods pro`], preco: [``,3000, 2000, 1500]}

var nome = prompt(`Qual o seu nome? `)
console.log(`${nome}, essa é a nossa lista de produtos, escolha o seu através do ID que está à esquerda do nome do produto: `)

for(i = 1; i < produtos.nome.length; i++){
    console.log(`${i}-${produtos.nome[i]} - Preço: ${produtos.preco[i].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
}

let prod_user = parseInt(produtos.preco[prompt(`Qual o produto que você escolheu? `)]);
let quant = parseInt(prompt(`Quantas unidades desse produto você vai querer? `));
let total = (prod_user*quant)


if (prod_user === 3000){
    var prod = produtos.nome[1]
} else if (prod_user === 2000){
    var prod = produtos.nome[2]
} else if (prod_user === 1500){
    var prod = produtos.nome[3]
}

var descP = 0
var descV = 0

if (total > 5000){
    descV = (total*20)/100
    descP = `20%`
} else if (total > 4000){
    descV = (total*15)/100
    descP = `15%`
} else if (total > 1000){
    descV = (total*10)/100
    descP = `10%`
}

let compra = {
    nome: prod,
    quantidade: quant,
    valor: prod_user,
    desconto: descV,
    valor_total: total-descV,
    recibo: function(){ 
        return `${nome} você está comprando ${this.quantidade} ${this.nome}, cada um custa ${this.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. O valor total
    da sua compra é de ${this.valor_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, já considerando o desconto caso tenha.`}
}

console.log(compra.recibo())