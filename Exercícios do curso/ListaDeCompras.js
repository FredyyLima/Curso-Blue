const prompt = require('prompt-sync')();

let prod = parseInt(prompt(`Quantos produtos você vai registrar?`));
let desc_prod = ``
let preco_prod = 0
let quant_prod = 0
let desc = [];
let preco = [];
let quant = [];
let total = 0

for(i = 0; i < prod; i++){
    desc_prod = prompt(`Digite a descricão do seu produto: `);
    console.log()
    preco_prod = parseFloat(prompt(`Digite o valor do seu produto: `));
    console.log()
    quant_prod = parseFloat(prompt(`Digite a quantidade que está comprando: `));
    console.log()
    total = (preco_prod * quant_prod + total)
    desc.push(desc_prod);
    preco.push(preco_prod);
    quant.push(quant_prod);
}
console.log()
console.log(`Muito bem! Você comprou os seguintes itens: ${desc}. O valor total da sua compra foi de R$${total}`);