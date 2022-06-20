
function alertaU(){
    window.location.href="./UnidadesSaudeMenu.html";
}

function alertaA(){
    window.location.href="./AtendimentoMenu.html";
}

function alertaE(){
    window.location.href="./EtapaMenu.html";
}

function alertaT(){
    window.location.href="./TesteMenu.html";
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