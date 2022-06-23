

var botaoSend = document.querySelector(".sendButton");

botaoSend.addEventListener("click",
function(){
    const entradas = document.querySelectorAll(".caixaTexto");
    const numero = entradas[0].value;
    const result = entradas[1].value;
    if(numero > 0 && result.length > 0){

        const data = {numero: numero,resultado: result};
        const rawResponse = fetch("http://localhost:8080/testes/cadastrar",{
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