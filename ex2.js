/*Utilizando estrutura condicional **exiba** a descrição da classificação da **idade** da pessoa de acordo com os dados abaixo:

Jovens - Indivíduos de até 15 anos;
Adultos - Indivíduos com idade entre 16 até 64 anos;
Idosos - Indivíduos de 65 anos em diante.
*/

function classificaIdade(idade){
    if (idade <= 15){
        return ("Jovem")
    } else if ((idade > 15)&& (idade < 65)){
        return ("Adulto")
    }else{
        return("Idoso")
    }
} 

let anos = prompt("Idade");
alert(classificaIdade(anos));