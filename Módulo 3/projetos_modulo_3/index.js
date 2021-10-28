const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const port = 3000;

const jogos = [{}];

app.get("/", (req,res) =>{
    console.log(`Sejam bem vindos ao menu de jogos Don Fredon Bigodon`);
});

app.get("/listaJogos", (req,res) => {
    res.send(`Essa é a lista de jogos: ${jogos}`)
});

app.post("/listaJogos", (req,res) => {
    const {nome, tipo} = req.body
    PushManager.jogos = req.body
    res.send(`Essa é a lista de jogos:\n nome:${req.body.nome}\n tipo:${req.body.tipo}`)
});

app.put("/listaJogos/:id", (req,res) =>{
    const id = req.params.id -1;
    const {nome, tipo} = req.body
    res.send(`Esse é o jogo da posiçao ${id +1} da lista de jogos:\n nome:${req.body.nome}\n tipo:${req.body.tipo}`)
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));