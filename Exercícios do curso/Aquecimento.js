const prompt = require('prompt-sync')();

/*let lista = ["1","2","3","4","5"];

let index = 0

while(index <= lista.length){

    console.log(index, lista[index]);
    index++
}*/
/*cont = 0
function cavalgar(){
        console.log(`pocotó...`)
        cont = cont + 1
}

let passeio = setInterval(function(){
    cavalgar()},1000)

if (cont === 10){
    clearInterval(passeio)
}*/

function primeiraFuncao() {
    console.log("Esperou isso");
  }
  
  async function segundaFuncao() {
    console.log("INICIOU");
  
    await primeiraFuncao();
  
    console.log("Agora executou isso !!!");
  }
  
  segundaFuncao();
  