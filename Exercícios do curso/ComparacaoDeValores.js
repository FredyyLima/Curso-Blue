const prompt = require('prompt-sync')();

console.log("Exercício 6");
let num_1 = +prompt("Digite o primeiro valor inteiro:");
let num_2 = +prompt("Digite o segundo valor inteiro:");
if (num_1 > num_2){
  console.log(num_1);
}else{
  console.log("")
  console.log("O primeiro valor não é maior ou igual ao segundo valor");
}