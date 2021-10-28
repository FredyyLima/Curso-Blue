//backend - projeto vagas
//importacao das libs externas (express e cors)
const express = require('express');
const cors = require('cors'); 

//importar rots que vou ultilizar
const vagasRouter = require('./routes/vagas.routes');

//inicializacao do express
const app = express();

//habilitar o modo json do express;
app.use(express.json());

//habilitar o midleware do cors
app.use(cors());

//inicializar a rota /vagas de acordo com as configurações do meu arquivo de rotas
app.use('/vagas', vagasRouter);


const port = 3000;

app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`)
});