

function verificaDataValida(dia, mes,ano){
    if(ano % 4 == 0){
        if(mes == 2){
            if(dia > 0 && dia <= 29){
                return true;
            }else{
                return false;
            }
        }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
            if(dia > 0 && dia <= 30){
                return true;
            }else{
                return false;
            }
        }else{
            if(dia > 0 && dia <= 31){
                return true;
            }else{
                return false;
            }
        }
    }else{
        if(mes == 2){
            if(dia > 0 && dia <= 28){
                return true;
            }else{
                return false;
            }
        }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
            if(dia > 0 && dia <= 30){
                return true;
            }else{
                return false;
            }
        }else{
            if(dia > 0 && dia <= 31){
                return true;
            }else{
                return false;
            }
        }
    }
}

var botaoSend = document.querySelector(".sendButton");

botaoSend.addEventListener("click",
function(){
    const entradas = document.querySelectorAll(".caixaTexto");
    const descricao = entradas[0].value;
    const tempo = entradas[1].value;
    const r = entradas[2].checked;
    const s = entradas[3].checked;
    console.log(r);
    console.log(s);
    if(descricao.length > 0 && tempo > 0){
        const data = {descricao: descricao,data:"2022-01-01",tempoAtendimento: tempo,relacionado_com_pandemia: r,sem_possibilidade_contagio: s}
        const rawResponse = fetch("http://localhost:8080/atendimentos/cadastrar",{
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            method: 'POST',
            body:JSON.stringify(data),
        }).then((response) => response.json())
        .then((data) => {
          alert("Success:", data);
        })
        .catch((error) => {
          alert("Error:", error);
        });
    
    }
});