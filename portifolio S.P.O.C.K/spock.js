var contador = 0;

document.getElementById("botao").addEventListener("click", ()=>{
    const imagem1 = document.getElementById("container-1-imagem-1");
    const imagem2 = document.getElementById("container-1-imagem-2");
    const texto = document.getElementById("container-1-imagem-4");

    if(contador%2 == 0){
        imagem1.style.backgroundColor = "#02D5FF";
        imagem2.style.backgroundColor = "#02D5FF";
        texto.style.color = "#7ee9ff";
    }
    else{
        imagem1.style.backgroundColor = "#ffc800c0";
        imagem2.style.backgroundColor = "#ffc800c0";
        texto.style.color = "#F0CB46";
    }

    contador ++;
})