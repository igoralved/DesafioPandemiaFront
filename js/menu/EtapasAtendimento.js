<<<<<<< HEAD

var etapas = document.querySelector('[data-e]');

function loadEtapas(result){
    for(let e of result){
        const linhaNova = document.createElement('tr');
        
        const conteudo = `
        <td>
        <ul>
        <h1></h1>
        <li>
            <a>ID: ${e.id}</a>
            <h1></h1>
            <a>Numero: ${e.numero}</a>
            <h1></h1>
            <a>Descricao: ${e.descricao}</a>
            <h1></h1>
        </li>
        <h1></h1>
    </ul>
    </td>
        `
        linhaNova.innerHTML = conteudo;
        etapas.appendChild(linhaNova);
    }
}

const http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE) {
        var result = JSON.parse(http.response);
        loadEtapas(result);
    }
}

http.open("GET","http://localhost:8080/atendimentos/"+localStorage.getItem("idA")+"/etapas");
=======

var etapas = document.querySelector('[data-e]');

function loadEtapas(result){
    for(let e of result){
        const linhaNova = document.createElement('tr');
        
        const conteudo = `
        <td>
        <ul>
        <h1></h1>
        <li>
            <a>ID: ${e.id}</a>
            <h1></h1>
            <a>Numero: ${e.numero}</a>
            <h1></h1>
            <a>Descricao: ${e.descricao}</a>
            <h1></h1>
        </li>
        <h1></h1>
    </ul>
    </td>
        `
        linhaNova.innerHTML = conteudo;
        etapas.appendChild(linhaNova);
    }
}

const http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE) {
        var result = JSON.parse(http.response);
        loadEtapas(result);
    }
}

http.open("GET","http://localhost:8080/atendimentos/"+localStorage.getItem("idA")+"/etapas");
>>>>>>> 4e20473a8ff96cefbe18660649c04a57349f8ce5
http.send();