

var atendimentos = document.querySelector('[data-a]');


function loadAtendimentos(result){
    for(let a of result){
        const linhaNova = document.createElement('tr');
        const relPand = a.relacionado_com_pandemia;
        const semPosCont = a.sem_possibilidade_contagio;
        let relSim = '';
        let semSim = '';
        if(relPand){
            relSim = 'sim';
        }else{
            relSim = 'nao';
        }
        if(semPosCont){
            semSim = 'sim';
        }else{
            semSim = 'nao';
        }
        const conteudo = `
        <td>
        <ul>
        <h1></h1>
        <li>
            <a>ID: ${a.id}</a>
            <h1></h1>
            <a>Descricao: ${a.descricao}</a>
            <h1></h1>
            <a>Data: ${a.data}</a>
            <h1></h1>
            <a>Relacionado com pandemia: ${relSim}</a>
            <h1></h1>
            <a>Sem possibilidade de contágio: ${semSim}</a>
            <h1></h1>
            <a>Tempo de atendimento: ${a.tempoAtendimento}</a>
            <h1></h1>
            <button class="verEtapas" id=${a.id}>Ver etapas</button>
            <h1></h1>
            <button class="verTestes" id=${a.id}>Ver testes</button>
            <h1></h1>
        </li>
        <h1></h1>
    </ul>
    </td>
        `
        linhaNova.innerHTML = conteudo;
        atendimentos.appendChild(linhaNova);
    }
}

const http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE) {
        var result = JSON.parse(http.response);
        loadAtendimentos(result);
        const botoesVerEtapas = atendimentos.getElementsByClassName("verEtapas");

        for(let b of botoesVerEtapas){
            b.addEventListener(
                "click",
                function(){
                    localStorage.setItem("idA",b.id);
                    window.location.href="./EtapasAtendimento.html";
                }
            );
        }

        const botoesVerTestes = atendimentos.getElementsByClassName("verTestes");

        for(let b of botoesVerTestes){
            b.addEventListener(
                "click",
                function(){
                    localStorage.setItem("idA",b.id);
                    window.location.href="./TestesAtendimento.html";
                }
            );
        }
    }
}

http.open("GET","http://localhost:8080/atendimentos/listar");
http.send();
