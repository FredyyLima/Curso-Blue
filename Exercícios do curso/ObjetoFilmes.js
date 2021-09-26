const prompt = require('prompt-sync')();

/*Tarefa 01:

Crie catálogo de filmes com 5 filmes, cada filme precisa ser um objeto,
cada objeto precisa ter os seguintes atributos:

- nome
- duracao
- ano
- diretor
- atores principais(lista)
- dados (função anônima que retorna uma string com os dados do filme)

No final mostra no console os dados de todos os filmes ao mesmo
tempo.*/

/*Tarefa 02 - Desafio:

Insira esses 5 filmes dentro de uma lista
chamada catalogo, e mostre na tela os
dados de cada um varrendo a lista com

um for.*/

let filme1 = {
    nome: `Velozes e Furiosos 5 - Operação Rio`,
    duracao: `130 min`,
    ano:`2011`,
    diretor: `Justin Lin`,
    atores: ['Vin Diesel', 'Paul Walker', 'Tyrese Gibson', 'Chris Ludacris Bridge'],
    dados: function(){
        return `O primeiro filme é o ${this.nome}, ele tem ${this.duracao} de duração. O seu diretor foi ${this.diretor} e seu principal elenco foi ${this.atores[0]}, ${this.atores[1]}, ${this.atores[2]}, ${this.atores[3]}.`
    }
}

let filme2 = {
    nome: `O poderoso chefão`,
    duracao: `175 min`,
    ano: `1972`,
    diretor: `Francis Ford Coppola`,
    atores: [`Marlon Brando`, `Al Pacino`, `James Caan`, `Richard Castellano`],
    dados: function(){
        return `O segundo filme é o ${this.nome}, ele tem ${this.duracao} de duração. O seu diretor foi ${this.diretor} e seu principal elenco foi ${this.atores[0]}, ${this.atores[1]}, ${this.atores[2]}, ${this.atores[3]}.`
    }
}
let filme3 = {
    nome: `Star Wars: Episódio IV – Uma Nova Esperança`,
    duracao: `121 min`,
    ano: `1977`,
    diretor: `George Lucas`,
    atores: [`Mark Hamill`, `Harrison Ford`, `Carrie Fisher`, `Alec Guiness`],
    dados: function(){
        return `O terceiro filme é o ${this.nome}, ele tem ${this.duracao} de duração. O seu diretor foi ${this.diretor} e seu principal elenco foi ${this.atores[0]}, ${this.atores[1]}, ${this.atores[2]}, ${this.atores[3]}.`
    }
}
let filme4 = {
    nome: `As Branquelas`,
    duracao: `109 min`,
    ano: `2004`,
    diretor:`Keenan Ivory Wayans`,
    atores: [`Shawn Wayans`, `Marlon Wayans`, `Jaime King`, `Frankie Faison`],
    dados: function(){
        return `O quarto filme é o ${this.nome}, ele tem ${this.duracao} de duração. O seu diretor foi ${this.diretor} e seu principal elenco foi ${this.atores[0]}, ${this.atores[1]}, ${this.atores[2]}, ${this.atores[3]}.`
    }
}
let filme5 = {
    nome: `Shrek`,
    duracao: `90 min`,
    ano: `2001`,
    diretor: `Andrew Adamson e Vicky Jenson`,
    atores: [`Mike Myers`, `Eddie Murphy`, `Cameron Diaz`, `John Lithgow`],
    dados: function(){
        return `O quinto filme é o ${this.nome}, ele tem ${this.duracao} de duração. O seu diretor foi ${this.diretor} e seu principal elenco foi ${this.atores[0]}, ${this.atores[1]}, ${this.atores[2]}, ${this.atores[3]}.`
    }
}

let catalogo = [filme1, filme2, filme3, filme4, filme5];

for(infos of catalogo){
    console.log(infos.dados())
    console.log()
}