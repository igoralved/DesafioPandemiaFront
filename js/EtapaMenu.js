

var etapas = document.querySelector('[data-e]');

function loadUnidadesDeSaude(result){
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
        loadUnidadesDeSaude(result);
    }
}

http.open("GET","http://localhost:8080/etapas/todas");
http.send();

