
function alertaU(){
    window.location.href="./escolheAcaoUnidade.html";
}

function alertaA(){
    window.location.href="./escolheAcaoAtendimento.html";
}

function alertaE(){
    window.location.href="./escolheAcaoEtapa.html";
}

function alertaT(){
    window.location.href="./escolheAcaoTeste.html";
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