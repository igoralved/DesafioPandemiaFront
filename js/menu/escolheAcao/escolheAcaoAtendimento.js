
var botao1 = document.querySelectorAll(".botaoA")[0];
var botao2 = document.querySelectorAll(".botaoA")[1];

botao1.addEventListener(
    "click",
    function(){
        window.location.href="./AtendimentoMenu.html";
    }
);

botao2.addEventListener(
    "click",
    function(){
        window.location.href="./cadastraAtendimento.html";
    }
);