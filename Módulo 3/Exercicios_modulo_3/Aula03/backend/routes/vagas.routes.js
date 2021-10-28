const express = require('express');
//inicializar as rotas do express
const router = express.Router();


const vagas = [
    {
    id: Date.now(),
    titulo: `Desenvolvedor FullStack`,
    logo: "https://www.clubedecriacao.com.br/wp-content/uploads/2021/08/media-monks_logo-lockup-1-e1627974422968-1024x480.jpg",
    empresa: `Media.Monks`,
    salario: `5.000,00`,
    senioridade: `Sênior`,
    descricao: `Meu próximo emprego a partir de novembro!`
    },
]

//[GET] - retornar uma lista de vagas
router.get('/', (req,res) => {
    res.send(vagas);
});

//[GET] - retornar uma vaga de acordo com o id
router.get('/:id', (req,res) => {
    const idParam = req.params.id;
    const vaga = vagas.find(vaga => vaga.id == idParam);
    res.send(vaga);
});

//[POST] /vagas/add - cadastro de uma nova vaga
router.post('/add', (req,res) =>{
    //recebi o objeto da vaga para cadastrar vinda do cliente (via req http POST)
    const vaga = req.body;
    vaga.id = Date.now();
    vagas.push(vaga);
    res.status(201).send({
        message: `Cadastrado com sucesso!`,
        data: vaga
    });
})

// [PUT] /vagas/edit - editar uma vaga já cadastrada
router.put('/edit/:id', (req,res) =>{
    //o objeto veio do front pra atualizar a vaga com id recebido
    const vagaEdit = req.body;
    // o id recebido via parametros
    const idParam = req.params.id;
    //procura o indice da vaga pre cadastrada na lista de acordo com o id recebido para atualizar
    let index = vagas.findIndex(vaga => vaga.id == idParam);



    //spread operator "..." (serva para fazer espelhamento de objs, arrays e etc)
    vagas[index] = {
        ...vagas[index],
        ...vagaEdit
    }
    res.send({
        message: `Vaga ${vagas[index].titulo} atualizada com sucesso`,
        data: vagas[index]
    })
});

// [DELETE] /vagas/delete/{id} - exclui um item da lista de acordo com seu id
router.delete('/delete/:id', (req,res) =>{
    //acessamos o id recebido via parametros
    const idParam = req.params.id;
    
    const index = vagas.findIndex(vaga => vaga.id == idParam);
    const nome = vagas[index];
    vagas.splice(index, 1);
    res.send({
        message: `Vaga ${nome.titulo} excluida com sucesso`
    });
})

module.exports = router;