var testes = document.querySelector('[data-t]');

function loadTestes(result){
    for(let t of result){
        const linhaNova = document.createElement('tr');
        
        const conteudo = `
        <td>
        <ul>
        <h1></h1>
        <li>
            <a>ID: ${t.id}</a>
            <h1></h1>
            <a>Numero: ${t.numero}</a>
            <h1></h1>
            <a>Resultado: ${t.resultado}</a>
            <h1></h1>
        </li>
        <h1></h1>
    </ul>
    </td>
        `
        linhaNova.innerHTML = conteudo;
        testes.appendChild(linhaNova);
    }
}

const http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE) {
        var result = JSON.parse(http.response);
        loadTestes(result);
    }
}

http.open("GET","http://localhost:8080/atendimentos/"+localStorage.getItem("idA")+"/testes");
http.send();