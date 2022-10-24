/*Faça 3 prompts ao usuário:
1. no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”);
2. no segundo, pergunte o primeiro valor que deseja calcular;
3. no terceiro, o segundo valor que deseja calcular.

Em seguida, realize o cálculo e exiba na tela um “alert” contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.*/


const calculadora = (op,n1,n2) =>{

    switch (op) {
        case '+':
          return (n1+n2)
          break;
        case '-':
          return (n1-n2)
          break;  
        case '*':          
          return (n1*n2)
          break;
        case '/'://supondo que n2 != de 0
          return (n1/n2)
          break;          


        default:
          return ("operador inválido");
      }

}

let operador = prompt("“+”, “-”, “*” ou “/”");
let numero1 = parseInt(prompt("Primeiro número:"));
let numero2 = parseInt(prompt("Segundo número:"));

alert(calculadora(operador,numero1,numero2))