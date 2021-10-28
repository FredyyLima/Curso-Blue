//buscar o elemento no html da minha lista onde vou inserir as vagas
const lista = document.getElementById('lista');

//atribuindo o endpoint da Api do Backend em uma constante
const apiUrl = 'http://localhost:3000/vagas';

const getVagas = async () => {
    //fetch api é uma apo do js responsavel por fazer comunicacao entre requisicoes http
    const response = await fetch(apiUrl)
    const vagas = await response.json()
    vagas.map((vaga) =>{
        lista.insertAdjacentHTML('beforeend',`
                <div class="col">
                  <div class="card h-100">
                    <img src="${vaga.logo}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${vaga.titulo}</h5>
                      <span class="badge rounded-pill bg-dark">${vaga.senioridade}</span>
                      <p class="card-text">R$${vaga.salario}</p>
                      <p class="card-text">${vaga.descricao}</p>
                      <button class="btn btn-primary" type="button">Editar</button>
                      <button class="btn btn-danger" type="button">Deletar</button>
                    </div>
                  </div>
                </div>
              </div>`
              )
    })
}

const submitForm = (evento) => {
    evento.preventDefault();
    console.log('teste');

    //pegar os valores que o usuario digitou no Input
    
}

getVagas();