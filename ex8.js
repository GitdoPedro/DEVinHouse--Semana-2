/*Percorra os números de o a 1000 e exiba no console os números primos e ao final a quantidade de números primos que existem nesse intervalo.*/


function definePrimo(n){
    let contador = 0
    if (n == 1){return true}
    else{
        for (var i = 1; i<=n; i++){
            if (n%i == 0){
                contador+=1 
            }    
        }
        if (contador == 2){return true}
        else{return false}
}}


function contaNumerosPrimos(repeticoes){
    let contador = 0
    for (var i = 1 ; i<= repeticoes ; i++){
        if (definePrimo(i)){
            contador +=1
        }
    }
    return contador
}

alert(contaNumerosPrimos(1000)+ ' números primos.')