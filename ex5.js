/*Exiba um prompt solicitando a entrada de um número para saber quantos pares e impares existem de 0 até o número digitado.
Calcule o número de pares e impares e exiba o resultado utilizando um alert.*/


function calculaParEImpar(n){
    let impar = 0
    let par   = 0
    let resultado = []
    for (var i = 0 ; i<=n ; i++){ 
        if (i%2 == 0){
            par+=1
        }else{
            impar +=1
        }
    }
    resultado.push('Número de pares: '+par)
    resultado.push('Número de ímpares: '+impar)
    return resultado

}

let numero = prompt("Número");
alert(calculaParEImpar(numero).join('\n'));