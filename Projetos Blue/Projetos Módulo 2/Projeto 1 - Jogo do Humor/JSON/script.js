var contador = 1;
var fotos =["../Projetos Módulo 2/Projeto 1 - Jogo do Humor/media/Coragem_feliz.png","../Projetos Módulo 2/Projeto 1 - Jogo do Humor/media/Coragem_tedio.png", "../Projetos Módulo 2/Projeto 1 - Jogo do Humor/media/Coragem_chateado.png", "../Projetos Módulo 2/Projeto 1 - Jogo do Humor/media/Coragem_com_medo1.png", "../Projetos Módulo 2/Projeto 1 - Jogo do Humor/media/Coragem_medo2.png","../Projetos Módulo 2/Projeto 1 - Jogo do Humor/media/Coragem_com_muito_medo.png"];

var humor=["Feliz", "Entediado", "Chateado","Medo nível 1", "Medo nível 2, preocupante...", "DE-SES-PE-RA-DO!!!!"];

var altera = ["Feliz","Entendiado", "Chateado", "Medo_1","Medo_2","Desespero"];

function trocarIMG(){
    if(contador == fotos.length){
        contador=0;
    }
    document.getElementById("img1").src=fotos[contador];
    document.getElementById("humor").innerHTML= humor[contador];
    document.getElementById("img1").alt= altera[contador];
    contador++;
    
}
