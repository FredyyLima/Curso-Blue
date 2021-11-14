//importar o mongoose para usar os seus metodos
const mongoose = require('mongoose');

//url de conexao = mongodb://servidor:porta/nomedobanco
// useNewUrlParser = fala para o mongo usar o novo sistema de urls
// useUnifiedTopolgy = mecanismo de monitoramento do banco de dados

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/Vagas',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
        console.log('MongoDB conectado')
    }).catch(err => console.log('Erro de conexão com o banco',err));
}


//exportando a funcao Conn para poder se usada em outros locais
module.exports = Conn;