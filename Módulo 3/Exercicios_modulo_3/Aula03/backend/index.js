//backend - projeto vagas
//importacao das libs externas (express e cors)
const express = require('express');
const cors = require('cors'); 
const Conn = require('./conn/conn');

//importar rots que vou ultilizar
const vagasRouter = require('./routes/vagas.routes');

// importa o model
//const Vaga = require('./models/vagas');

//inicializacao do express
const app = express();

//habilitar o modo json do express;
app.use(express.json());

//habilitar o midleware do cors
app.use(cors());

//inicializar a rota /vagas de acordo com as configurações do meu arquivo de rotas
app.use('/vagas', vagasRouter);


//chamo o metodo para a conexao com o banco de dados
Conn();

/*
//[GET] - retornar os dados cadastrados no banco de dados
app.get('/vagas', (req,res)=>{
    // Find -> retorna uma lista de documentos de acordo com o filtro
    Vaga.find()
    .then((vagas) => {
        console.log(vagas);
        res.send(vagas);
    }).catch((err) => console.log(err));
})

//[GET] - retorna a vaga de acordo com o titulo
app.get('/vagas/:titulo', (req,res)=>{
    const titulo = req.params.titulo;
    Vaga.find({ titulo: titulo})
    .then((vagas) => res.send(vagas))
    .catch((err) => console.log(err));
});*/



const port = 3000;

app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`)
});