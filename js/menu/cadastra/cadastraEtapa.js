

var botaoSend = document.querySelector(".sendButton");

botaoSend.addEventListener("click",
function(){
    const entradas = document.querySelectorAll(".caixaTexto");
    const numero = entradas[0].value;
    const desc = entradas[1].value;
    if(numero > 0 && desc.length > 0){

        const data = {numero: numero,descricao: desc};
        const rawResponse = fetch("http://localhost:8080/etapas/cadastrar",{
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