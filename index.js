//Calculadora de Partidas Rankeadas
let nivelHeroi = ""
let vitorias = 120
let derrotas = 45


function calcularVitorias(vitorias, derrotas){
    return vitorias - derrotas 
}
let saldoVitorias = calcularVitorias(vitorias, derrotas)    
if (saldoVitorias < 10){
    nivelHeroi = "Ferro"
} else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    nivelHeroi = "Bronze"
} else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    nivelHeroi = "Prata"
} else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    nivelHeroi = "Ouro"
} else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    nivelHeroi = "Diamante"
} else if (saldoVitorias >= 91 && saldoVitorias <= 100){
    nivelHeroi = "Lendário"
} else {
    nivelHeroi = "Imortal"
}  

console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível de " + nivelHeroi)