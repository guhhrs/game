let executando = false;
let acertos = 0; 

const startBotao = document.querySelector("#btn--start");
const numSorteado = document.querySelector(".num--atual");

const placarVit = document.querySelector(".num--vit") 
const placarDer = document.querySelector(".num--der")
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
    // alert(`O palpite foi ${palpite}`) 
    let numAnterior = Number(numSorteado.textContent); 
    numSorteado.textContent = Math.floor(Math.random()*20+1) 
    let numNovo = numSorteado.textContent;

    if (palpite === "alto" && numNovo > numAnterior){
        acertos++
        verificarVitoria();

        
    } else if ( palpite === "baixo" && numNovo < numAnterior){
        acertos++
        verificarVitoria();

    } else {
       gameOver()
    }
   

} 

function sortearNum() {
    return numAleatorio = Math.floor(Math.random()*20+1)
}

function verificarVitoria() {
    if (acertos >= 3){
        placarVit.textContent++
        acertos = 0; 
    } 
}

function gameOver(){
    placarDer.textContent++; 
    executando = false; 
    numSorteado.textContent = ""; 
    acertos = 0 
} 
