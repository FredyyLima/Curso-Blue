// SERVER API
// para instalar npm i express.
// importamos o express
const express = require('express');
const cors = require('cors');

// inicializar o express no nosso arquivo javascript para que ele possa assumir as funcoes do servidor
const app = express();

// fala pro express ultilizar o midleware para trabalhar com JSON.
app.use(express.json());

// estou ultilizando o midleware do cors para liberar as requisicoes entre origens diferentes.
app.use(cors());

// definir a porta onde irá executar o meu servidor Back-End
const port = 3000;

app.get("/", (req,res)=>{
    res.send("Olá mundo");
});

app.get("/listar", (req,res)=>{
    res.send("Esse é o listar");
});

app.post("/listar", (req,res)=>{
    res.send(`Bem vindo ao listar ${req.body.nome}`);
});

app.post("/listar2", (req,res)=>{
    const {nome, profissao, empresa} = req.body;
    res.send(`Bem vindo ${nome}, sua profissão é: ${profissao} na empresa ${empresa}`);
});

app.put("/listar2/:id", (req,res) =>{
    const id = req.params.id;
    const {nome, profissao, empresa} = req.body;
    res.send(`id: ${id}, nome: ${nome}, profissao: ${profissao}, empresa: ${empresa}`)
});
//app.post
//app.put
//app.delete

// inicializamos o servidor na porta pré definida.
app.listen(port, () => {
    console.log(`o app está rodando em: http://localhost:${port}`);
});