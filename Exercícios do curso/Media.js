const prompt = require('prompt-sync')();

console.log("Exercicio 5");
let nome = prompt("Digite o nome do aluno(a):");
let nota_1 = +prompt("Digite a primeira nota do aluno:");
let nota_2 = +prompt("Digite a segunda nota do aluno:");
let nota_3 = +prompt("Digite a terceira nota do aluno:");
let media = ((nota_1+nota_2+nota_3)/3);
console.log("A média do aluno(a)",nome,"foi de:", media);
