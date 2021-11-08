const prompt = require('prompt-sync')();
function ler_pronome(){
  
  let pronome = ""
  let opcao = +prompt("Como você prefere ser chamado(a)? Digite 1 para Sr. 2 para Sra. ")
  
  while (true){  
    if (opcao === 1){
      pronome = "Sr."
      break;
    } else if ( opcao === 2){
      pronome = "Sra."
      break;
    } else{
      opcao = +prompt("Você digitou uma opção inválida! Por favor escolha entre 1 para Sr. e 2 para Sra. ")
  	}
  }
  return pronome
}



bloco_detetive:{
  console.log("Programa Detetive! \n");
  //Identificação do usuário
  let nome = prompt("Qual o seu nome? "); 
  let pronome = ler_pronome();
  let nome2 = (pronome+nome)
  let cont = 0
  let veredito = ""
  let art = ""

  if (pronome === "Sr."){
    art = "o"
  } else if (pronome === "Sra.") {
    art = "a"
  }
 
  //Conversa introdutória com o usuario, para que ele entenda o que está acontecendo nesse momento.
  console.log("");
  console.log(`${nome2}, Na noite do dia 25/10/2020, foi encontrado morto na sala de sua própria casa o Sr.Antônio Ribeiro. Agora a polícia está reunindo todas as informações e depoimentos para solucionar esse caso.${art.toUpperCase()} ${pronome} por enquanto, não é considerad${art} suspeit${art}, mas ainda assim precisaremos fazer algumas perguntas para ${art} ${pronome}`);
  console.log("");
  let user = (prompt("Tudo bem?").toLowerCase());
  console.log("");

  if (user === "não" || user === "n" || user === "nao")
  {
    console.log(`${pronome} precisamos que nos responda essas perguntas para que possa ir para casa tranquilamente, caso não tenha envolvimento com esse caso, é claro.`);
    console.log("");
    user = (prompt(`${art.toUpperCase()} ${pronome} ainda mantém a sua escolha de não responder? `).toLowerCase());
    console.log("");
    if (user === "sim" || user === "s")
    {
      console.log("Então não nos resta outra opção a não ser lhe prender preventivamente, até que o culpado seja encontrado. ");
      break bloco_detetive
    }
    else if(user === "não" || user === "n" || user === "nao")
    {
    console.log("Perfeito, então vamos começar com as perguntas!");
    }
  }
  else if(user ==="sim" || user === "s")
  {
    console.log("Perfeito, então vamos começar com as perguntas!");
  }
  console.log("");
  console.log(`Para todas as perguntas, responda apenas Sim ou Não.`);
  console.log("");
  console.log(`Primeira pergunta ${nome2}:`);
  console.log("");

  let tel = (prompt(`${art.toUpperCase()} ${pronome} telefonou para a vítima? `).toLowerCase());
    if (tel === "sim" || tel === "s")
    {
      cont = cont + 1
    }
  console.log("");
  let local = (prompt(`${art.toUpperCase()} ${pronome} esteve no local do crime? `).toLowerCase());
  if (local === "sim" || local === "s")
    {
      cont = cont + 1
    }
  console.log("");
  let morar = (prompt(`${art.toUpperCase()} ${pronome} mora perto da vítima? `).toLowerCase());
  if (morar === "sim" || morar === "s")
    {
      cont = cont + 1
    }
  console.log("");
  let dev = (prompt(`${art.toUpperCase()} ${pronome} devia para a vítima? `).toLowerCase());
  if (dev === "sim" || dev === "s")
    {
      cont = cont + 1
    }
  console.log("");
  let trab = (prompt(`${art.toUpperCase()} ${pronome} já trabalhou com a vítima? `).toLowerCase());
  if (trab === "sim" || trab === "s")
    {
      cont = cont + 1
    }
  console.log("");
  console.log(`Muito bem ${nome2}, agradecemos por ter respondido a todas as perguntas. Nesse momento o nosso sistema de investigação está processando as respostas e logo nos dará um veredito.`)
  

  if (cont === 2)
  {
    veredito = `Suspeit${art}`
  }
  if (cont === 3 || cont === 4)
  {
    veredito = "Cúmplice"
  }
  if (cont === 5)
  {
    veredito = `${art} Assassin${art}`
  }
  if (cont < 2)
  {
    veredito = "Inocente"
  }

  let timeoutID  = setTimeout(function tempo() {
   console.log(`De acordo com a nossa inteligência artificial ${art} ${pronome} respondeu positivamente a`,cont,`perguntas. Isso quer dizer que ${art} ${pronome} é`,veredito,`!`)
  }, 10000);
}
