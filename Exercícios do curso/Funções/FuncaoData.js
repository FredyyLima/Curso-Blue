const prompt = require("prompt-sync")();

//4.	Data com mês por extenso - Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato D de mesPorExtenso de AAAA.
//Valide a data e retorne NULL caso a data seja inválida.
let meses = [`Janeiro`,`Fevereiro`,`Março`,`Abril`,`Maio`,`Junho`,`Julho`,`Agosto`,`Setembro`,`Outubro`,`Novembro`,`Dezembro`];

function data(x){
    if (posi >= 0 || posi <= 11){
        return meses[posi]
    } else {
        return null
    }
}
var user_dia = prompt(`Digite uma data no formato DD/MM/AAAA, começando pelo dia: `);
let user_mes = parseInt(prompt(`Agora digite o mês, em dois dígitos: `));
var posi = (user_mes)-1
var user_ano = prompt(`Agora digite o ano, em quatro dígitos: `);
var user_data = user_dia +`/`+user_mes+`/`+user_ano

console.log(`${user_dia} de ${data(user_mes)} de ${user_ano}`);