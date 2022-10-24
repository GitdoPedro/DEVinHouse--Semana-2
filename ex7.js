/*Baseado na data atual, seu código deve verificar qual a estação atual do ano no hemisfério sul, exibindo através de um alert a estação atual.
Considere:
- 22/12 a 21/03 - Verão;
- 22/03 a 21/06 - Outono;
- 22/06 a 21/09 - Inverno;
- 22/09 a 21/12 - Primavera.*/


const defineEstacao = (dia,mes)=>{
    if (((dia > 21) && (mes == 12)) || ((dia < 22) && (mes == 3))|| (mes <= 2)){
        return ('Verão')
    }else if ((((dia > 21) && (mes == 3)) || ((dia < 22) && (mes == 6))|| (mes <= 5))){
        return ('Outono')
    }else if((((dia > 21) && (mes == 6)) || ((dia < 22) && (mes == 9))|| (mes <= 8))){
        return ('Inverno')
    }else{
        return ('Primavera')
    }

}

let hoje = new Date();
let dia = String(hoje.getDate()).padStart(2, '0');
let mes = String(hoje.getMonth() + 1).padStart(2, '0');
alert ('Estação atual: '+defineEstacao(dia,mes))



