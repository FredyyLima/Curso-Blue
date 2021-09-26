const prompt = require('prompt-sync')();

/*2.Faça um programa que leia nome e média de um aluno, guardando também a
situação em um objeto. No final, mostre o conteúdo da estrutura na tela. A média
para aprovação é 7. Se o aluno tirar entre 5 e 6.9 está de recuperação, caso
contrário é reprovado.*/

let nome = prompt(`Digite o seu nome: `);
let media = parseFloat(prompt(`Qual a sua média final? `));
let situacao = ``

if (media >= 7){
    situacao = `APROVADO`
} else if (media < 6.9 && media > 5){
    situacao = `RECUPERAÇÃO`
} else {
    situacao = `REPROVADO`
}

let aluno = {
    nome: nome,
    media: media,
    situacao: situacao,
    exibir: function(){
        return `A média do aluno(a) ${this.nome} é ${media}. De acordo com os parâmetros da escola, por ter atingido essa média
        durante o ano todo. Você está ${this.situacao}.`
    }
}

console.log(aluno.exibir());