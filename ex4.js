/*Utilizando estrutura de repetição, some os números digitados através do prompt enquanto o número for diferente de -1, quando digitado -1 pare de exibir o prompt e exiba através de um alert o resultado da soma dos números digitados.*/


const  somaNumeros = () => {
    let numero = parseInt(prompt("Número:"));
    let total = 0;
    while (numero != -1){
        total += numero;
        numero = parseInt(prompt("Número:"));
    }
    return total;
}


alert(somaNumeros())