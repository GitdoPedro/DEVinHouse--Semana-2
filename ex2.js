/*Utilizando estrutura condicional **exiba** a descrição da classificação da **idade** da pessoa de acordo com os dados abaixo:

Jovens - Indivíduos de até 15 anos;
Adultos - Indivíduos com idade entre 16 até 64 anos;
Idosos - Indivíduos de 65 anos em diante.
*/

const classificaIdade = (idade) => {
    const classicacaoEtaria = ["Jovem","Adulto","Idoso"]
    if (idade <= 15){
        return (classicacaoEtaria[0])
    } else if ((idade > 15)&& (idade < 65)){
        return (classicacaoEtaria[1])
    }else{
        return(classicacaoEtaria[2])
    }
} 

let anos = prompt("Idade");
alert(classificaIdade(anos));