/*Utilizando estrutura de repetição realize a tabuada do número x e exiba ela da seguinte forma:
2 x 0 = 0
2 x 1 = 2
....
2 x 10 = 20

O número para realizar a tabuada deve ser solicitado via prompt e o resultado apresentado via alert.*/

function exibeTabuada(num){
    let tabuada = []
    for (var i = 0; i<11; i++){
        tabuada.push(num+' x '+i+' = '+i*num)
    }
    return tabuada
}

let numero = prompt("Número");
alert(exibeTabuada(numero).join('\n'));