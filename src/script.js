const cepmostrar = document.getElementById('cep');
const bairromostrar = document.getElementById('bairro');
const cidademostrar = document.getElementById('cidade');
const estadoomostrar = document.getElementById('estado');
const ruamostrar = document.getElementById('rua')

function pegarTexto(event) {
    event.preventDefault();

    let cep = document.getElementById('text').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    getCEP(url);
}

function getCEP(url) {
    fetch(url)
      .then(res => res.json())
      .then(json => showContent(json))
      .catch(err => showError());
}

function showContent(cep) {
    
    console.log(cep.cep);
    console.log(cep.bairro);
    console.log(cep.localidade);
    console.log(cep.uf);
    console.log(cep.logradouro);

    cepmostrar.innerHTML = cep.cep;
    bairromostrar.innerHTML = cep.bairro;
    cidademostrar.innerHTML = cep.localidade;
    estadoomostrar.innerHTML = cep.uf
    ruamostrar.innerHTML = cep.logradouro == '' ? "Sem endereço" : cep.logradouro; 
}

function showError() {
    alert('Erro ao obter o CEP');

    cepmostrar.innerHTML = '';
    bairromostrar.innerHTML = '';
    cidademostrar.innerHTML = '';
    estadoomostrar.innerHTML = '';
    ruamostrar. innerHTML = '';
    
}