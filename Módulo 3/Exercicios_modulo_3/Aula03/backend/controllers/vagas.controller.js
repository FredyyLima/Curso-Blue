
const VagasServices = require('./../services/vagas.services');

const vagasService = new VagasServices;

class vagasController {
    getVagas = async (req,res) => {
        //acesso a funcao do services para acessar a lista de vagas do banco
        const vagas = await vagasService.findAll();
        res.send(vagas)
    }
}

module.exports = vagasController;