function calculadoraPA(vi, r){ // valor inical , raiz
    let sequencia = []
    sequencia.push(vi)
    for (var i = 0; i<9; i++){
        sequencia.push(sequencia[i]+r)
    }
    return sequencia
}  

let valorInical = Number(prompt("Valor inical: "));
let raiz = Number(prompt("Raiz: "));

alert('PA: ' + (calculadoraPA(valorInical,raiz)))