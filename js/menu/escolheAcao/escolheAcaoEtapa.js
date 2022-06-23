
var botao1 = document.querySelectorAll(".botaoE")[0];

var botao2 = document.querySelectorAll(".botaoE")[1];

botao1.addEventListener(
    "click",
    function(){
        window.location.href="./EtapaMenu.html";
    }
);

botao2.addEventListener(
    "click",
    function(){
        window.location.href="./cadastraEtapa.html";
    }
);