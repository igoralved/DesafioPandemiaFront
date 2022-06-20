
function alertaU(){
    window.location.href="./UnidadesSaudeMenu.html";
}

function alertaA(){
    window.location.href="./AtendimentoMenu.html";
}

function alertaE(){
    alert("Para as etapas de atendimentos");
}

function alertaT(){
    alert("Para os testes dos atendimentos");
}


const botaoU = document.querySelector(".botaoU");

botaoU.addEventListener(
    "click",
    alertaU
)

const botaoA = document.querySelector(".botaoA");

botaoA.addEventListener(
    "click",
    alertaA
)

const botaoE = document.querySelector(".botaoE");

botaoE.addEventListener(
    "click",
    alertaE
)

const botaoT = document.querySelector(".botaoT");

botaoT.addEventListener(
    "click",
    alertaT
)