// importar o nosso model para usar sas funoces do mongo no servicos
const Vaga = require('./../models/vagas');

class VagasServices {
    // vai conecta com o banco de dados e retornar a list de vagas
    findAll = async () => await Vaga.find();
}

module.exports = VagasServices;