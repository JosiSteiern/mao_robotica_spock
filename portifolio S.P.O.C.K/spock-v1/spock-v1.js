// Evento de hover para mostrar o texto nas imagens
// imagem 1
document.getElementById("cont-2-img-1").addEventListener("mouseenter", ()=>{
    document.getElementById("descricao-imagem1").style.display = "flex";
})

document.getElementById("cont-2-img-1").addEventListener("mouseleave", ()=>{
    document.getElementById("descricao-imagem1").style.display = "none";
})

// imagem 2
document.getElementById("cont-2-img-2").addEventListener("mouseenter", ()=>{
    document.getElementById("descricao-imagem2").style.display = "flex";
})

document.getElementById("cont-2-img-2").addEventListener("mouseleave", ()=>{
    document.getElementById("descricao-imagem2").style.display = "none";
})

// imagem 3
document.getElementById("cont-2-img-3").addEventListener("mouseenter", ()=>{
    document.getElementById("descricao-imagem3").style.display = "flex";
})

document.getElementById("cont-2-img-3").addEventListener("mouseleave", ()=>{
    document.getElementById("descricao-imagem3").style.display = "none";
})

// imagem 4
document.getElementById("cont-2-img-4").addEventListener("mouseenter", ()=>{
    document.getElementById("descricao-imagem4").style.display = "flex";
})

document.getElementById("cont-2-img-4").addEventListener("mouseleave", ()=>{
    document.getElementById("descricao-imagem4").style.display = "none";
})

// imagem 5
document.getElementById("cont-2-img-5").addEventListener("mouseenter", ()=>{
    document.getElementById("descricao-imagem5").style.display = "flex";
})

document.getElementById("cont-2-img-5").addEventListener("mouseleave", ()=>{
    document.getElementById("descricao-imagem5").style.display = "none";
})

const botaoAnterior = document.querySelector(".prev");
const botaoProximo = document.querySelector(".next");
const imagensCarrossel = document.querySelector(".carousel-images");
const totalImagens = document.querySelectorAll(".carousel-images img").length;

const imagensVisiveis = 3; 
let indiceAtual = 0;

function atualizarCarrossel() {
    const deslocamento = -indiceAtual * 304 * imagensVisiveis; 
    imagensCarrossel.style.transform = `translateX(${deslocamento}px)`;
}

botaoAnterior.addEventListener("click", () => {
    if (indiceAtual > 0) {
        indiceAtual--;
    } else {
        indiceAtual = Math.ceil(totalImagens / imagensVisiveis) - 1; 
    }
    atualizarCarrossel();
});

botaoProximo.addEventListener("click", () => {
    if (indiceAtual < Math.ceil(totalImagens / imagensVisiveis) - 1) {
        indiceAtual++;
    } else {
        indiceAtual = 0; 
    }
    atualizarCarrossel();
});
