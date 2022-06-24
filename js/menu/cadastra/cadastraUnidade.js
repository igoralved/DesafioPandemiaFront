

var botaoSend = document.querySelector(".sendButton");

botaoSend.addEventListener("click",
function(){
    const entradas = document.querySelectorAll(".caixaTexto");
    const nome = entradas[0].value;
    const nroP = entradas[1].value;
    if(nroP > 0 && nome.length > 0){

        const data = {nome: nome,numeroPacientes: nroP,data:"2022-01-01"};
        const rawResponse = fetch("http://localhost:8080/unidades/cadastrar",{
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