
var unidades = document.querySelector('[data-u]');
function loadUnidadesDeSaude(result){
    for(let u of result){
        const linhaNova = document.createElement('tr');
        const conteudo = `
        <td>
        <ul>
        <h1></h1>
        <li>
            <a>ID: ${u.id}</a>
            <h1></h1>
            <a>Nome: ${u.nome}</a>
            <h1></h1>
            <a>Data: ${u.data}</a>
            <h1></h1>
            <a>Numero pacientes: ${u.numeroPacientes}</a>
            <h1></h1>
            <button class="verAtendimentos" id=${u.id}>Ver atendimentos</nutton>
            <h1></h1>
        </li>
        <h1></h1>
    </ul>
    </td>
        `;
        linhaNova.innerHTML = conteudo;
        unidades.appendChild(linhaNova);
    }
}

const http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE) {
        var result = JSON.parse(http.response);
        loadUnidadesDeSaude(result);
        const botoesVerAtendimentos = unidades.getElementsByClassName("verAtendimentos");

        for(let b of botoesVerAtendimentos){
            b.addEventListener(
                "click",
                function(){
                    localStorage.setItem("idU",b.id);
                    window.location.href="./AtendimentosUnidade.html";
                }
            );
        }

    }
}

http.open("GET","http://localhost:8080/unidades/todas?nome=QUALQUER");
http.send();