//importar o mongoose
const mongoose = require('mongoose');

// Schemas --> é a estrutura de dados do documento('linha tabela') que é aplicado por meio da camada de aplicativo
// Documents --> são como se foesse as linhas da nossa tabela.
// Model ->> são construtores que pegam um schema e cria uma instancia de um documento equivalente a um registro em um banco de dados relacional.
// Collections --> são equivalentes as tabela no banco de dados e elas podem conter varios documentos JSON.

// criar o nosso model

const vagaModel = new mongoose.Schema({
    titulo: { type: String, required: true},
    empresa: { type: String, required: true},
    logo: { type: String, required: true},
    salario: { type: Number, required: true},
    senioridade: { type: String, required: true},
    descricao: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now},
});

//inicializa meu model na colletion vaga com o schema vagaModel

const Vaga = mongoose.model('Vagas', vagaModel);

module.exports = Vaga;

