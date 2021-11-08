const prompt = require('prompt-sync')();

/*Exercício 6 
Um professor, muito legal, fez 3 provas durante um semestre, mas só vai levar em conta as duas notas mais altas para calcular a média.
Faça uma aplicação que peça o valor das 3 notas, mostre como seria a média com essas 3 provas, a média com as 2 notas mais altas, bem como sua nota mais alta e sua nota mais baixa.
 */

var nota_maior1 = 0
var nota_maior2 = 0
var mediamaiores = 0
var media = 0

   let nota1 = parseFloat(prompt(`Digite a nota da primeira prova: `));
   let notamaior = nota1
   let notamenor = nota1
   let nota2 = parseFloat(prompt(`Digite a nota da segunda prova: `))
   if (nota2 > notamaior){
       notamaior = nota2
    } else {
        notamenor = nota2
    }
   let nota3 = parseFloat(prompt(`Digite a nota da terceira prova: `))
   if(nota3 > notamaior){
       notamaior = nota3
   } else if(nota3 < notamenor){
       notamenor = nota3
   }

   if (nota1 === notamenor){
    mediamaiores = (nota2+nota3)/2
   } else if( nota2 === notamenor){
    mediamaiores = (nota1+nota3)/2
   } else if(nota3 === notamenor){
    mediamaiores = (nota1+nota3)/2
   }
media = (nota1+nota2+nota3)
console.log(`A primeira nota é: ${nota1}`);
console.log(`A segunda nota é: ${nota2}`);
console.log(`A terceira nota é: ${nota3}`);
console.log()
console.log(`A media considerando as 3 notas é: ${media}`);
console.log(`A maior nota é: ${notamaior}`);
console.log(`A menor nota é: ${notamenor}`)

