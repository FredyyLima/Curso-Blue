const prompt = require('prompt-sync')();

//1.	Exercício – Treino: Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

var lista_op = [`1 - Soma`,`2 - Subtração`,`3 - Divisão`,`4 - Multiplicação`];
var user = parseInt(prompt(`Escolha uma opção da lista (Utilize os números de identificação) -> ${lista_op} `));

function operacoes(x,y){
        if (user === 1){
            return x+y
        } else if (user === 2){
            return x-y
        } else if (user === 3){
            return x/y
        } else if (user === 4){
            return x*y
        }
}
console.log();
x = parseFloat(prompt(`Agora escolha o primeiro número: `));
console.log();
y = parseFloat(prompt(`Agora escolha o segundo número: `))
console.log();
console.log(`O resultado da operação é: ${operacoes(x,y)}`);