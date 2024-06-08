let executando = false;

const startBotao = document.querySelector("#btn--start");
const numSorteado = document.querySelector(".num--atual");
// const botaoAlto = document.querySelector("#btn--alto");
// const botaoBaixo = document.querySelector("btn--baixo")
// const start = document.getElementById("btn-start") 

startBotao.addEventListener("click", startGame)

function startGame(){

    if (executando === true ){
        alert("jogo já está em andamento... ✔")
        return 
    } else {
        //sorteando numero de 1 á 20 
        let numAleatorio = Math.floor(Math.random()*20+1)
        numSorteado.textContent = numAleatorio 
        
        executando = true 
}
} 

function verificarResposta(palpite){
    alert(`O palpite foi ${palpite}`)
}
