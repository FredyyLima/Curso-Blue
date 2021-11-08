//buscar o elemento no html da minha lista onde vou inserir as vagas
const lista = document.getElementById('lista');

//atribuindo o endpoint da Api do Backend em uma constante
const apiUrl = 'http://localhost:3000/vagas';

let edicao = false;
let idEdicao = 0;

const getVagas = async () => {
    //fetch api é uma apo do js responsavel por fazer comunicacao entre requisicoes http
    const response = await fetch(apiUrl)
    const vagas = await response.json()
    vagas.map((vaga) =>{
        lista.insertAdjacentHTML('beforeend',`
                <div class="col">
                  <div class="card h-100">
                    <img src="${vaga.logo}" class="card-img-top" alt="..."height="200px">
                    <div class="card-body">
                      <h5 class="card-title">${vaga.titulo}</h5>
                      <span class="badge rounded-pill bg-dark">${vaga.senoridade}</span>
                      <p class="card-text">R$${vaga.salario}</p>
                      <p class="card-text">${vaga.descricao}</p>
                      <button class="btn btn-primary" onclick="editVaga('${vaga.id}')">Editar</button>
                      <button class="btn btn-danger" onclick="deleteVaga('${vaga.id}')">Deletar</button>
                    </div>
                  </div>
                </div>
              </div>`
              )
    })
}

//[POST] envia uma vaga para o backend para ser cadastrada

const submitForm = async (event) => {
    event.preventDefault();
    //pegar os valores que o usuario digitou no Input
    let titulo = document.getElementById('titulo');
    let logo =  document.getElementById('logo');
    let empresa = document.getElementById('empresa');
    let salario = document.getElementById('salario');
    let senoridade =  document.getElementById('senoridade');
    let descricao = document.getElementById('descricao');

    const vaga ={
      titulo: titulo.value,
      logo: logo.value,
      empresa: empresa.value,
      salario: parseFloat(salario.value),
      senoridade: senoridade.value,
      descricao: descricao.value
    }
    if(edicao) {
      putVaga(vaga,idEdicao)
    } else {
      createVaga(vaga);
    }
  limparCampos();

  lista.innerHTML = ''
}

const createVaga = async (vaga) => {
  // estou construindo a requisição para ser enviada para o Backend
  const request = new Request(`${apiUrl}/add`, {
    method: 'POST',
    body: JSON.stringify(vaga),
    headers: new Headers({
      'content-type': 'application/json'
    })
  })


//chamamos a funcao fetch de acordo com as nossas configuracoes de requisicao

const response = await fetch(request);

const result = await response.json();
//pego o objeto que vem do backend e exibo a msg de sucesso em um alerta.
alert(result.message)
getVagas();
}

const putVaga = async (vaga, id) => {
  // estou construindo a requisição para ser enviada para o Backend
  const request = new Request(`${apiUrl}/edit/${id}`, {
    method: 'PUT',
    body: JSON.stringify(vaga),
    headers: new Headers({
      'content-type': 'application/json'
    })
  })


//chamamos a funcao fetch de acordo com as nossas configuracoes de requisicao

const response = await fetch(request);

const result = await response.json();
//pego o objeto que vem do backend e exibo a msg de sucesso em um alerta.
alert(result.message)
edicao = false;
idEdicao = 0;
getVagas();
}

const limparCampos = () => {
  titulo.value = "";
  logo.value = "";
  empresa.value = "";
  salario.value = "";
  senoridade.value = "";
  descricao.value = "";
}


//[DELETE] deletar uma vagas
const deleteVaga = async (id) =>{
  //construir a requisicao de delete
  const request = new Request(`${apiUrl}/delete/${id}`,{
    method: 'DELETE'
  })

  const response = await fetch(request);
  const result = await response.json();

  alert(result.message);
  lista.innerHTML= '';
  getVagas();
}

//[GET] - função para receber o ID via paramentro e envia uma req para o back e retorna a vaga de acordo com esse ID
const getVagasById = async (id) => {
  const response = await fetch (`${apiUrl}/${id}`);
  return await response.json();
}

//[PUT] - ao clicar no botao editar, vai preencher os campos dos inputs para montar o objeto para ser editado
const editVaga = async (id) => {
  //habilitando o modo de edicao e enviando o ID para a variavel idEdicao
  edicao = true;
  idEdicao = id; 
  //Precisamos buscar a informação da vaga por id para popular os campos
  //salvar os dados da vafa que vamos editar na variavel vaga.
  const vaga = await getVagasById(id);

  //preencher os campos de acordo com a vaga que vamos editar.
  titulo.value = vaga.titulo;
  logo.value = vaga.logo;
  empresa.value = vaga.empresa;
  salario.value = vaga.salario;
  senoridade.value = vaga.senoridade;
  descricao.value = vaga.descricao;



}




getVagas();