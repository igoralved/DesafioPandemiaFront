
var unidades = document.querySelector('[data-u]');

function loadUnidadesDeSaude(result){
    for(let u of result){
        const linhaNova = document.createElement('tr');
        const conteudo = `
        <td>
        <ul>
        <li>
            <a>ID: ${u.id}</a>
            <h1></h1>
            <a>Nome: ${u.nome}</a>
            <h1></h1>
            <a>Numero pacientes: ${u.numeroPacientes}</a>
            <h1></h1>
            <a>Data: ${u.data}</a>
        </li>
    </ul>
    </td>
        `
        linhaNova.innerHTML = conteudo;
        unidades.appendChild(linhaNova);
    }
}

const http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE) {
        var result = JSON.parse(http.response);
        loadUnidadesDeSaude(result);
    }
}

http.open("GET","http://localhost:8080/unidades/todas");
http.send();
