function fnCapitalizarNovo(colecao, atributo){
    if (typeof colecao[0] == 'object'){
        let resultado = colecao.map(function(obj){
            let letraInicial = obj[atributo].charAt(0).toUpperCase();
            let resto = obj[atributo].slice(1);
        
            obj[atributo] = letraInicial + resto;
            return obj;
        });
        console.log(resultado);
    }
}

function fncapitalizar(vetor){
    let modificado = [];
    
    for(let i = 0; i < vetor.length; i++) {
    let letraInicial = vetor[i].charAt(0).toUpperCase();
    let resto = vetor[i].slice(1);
    let resultado = letraInicial + resto;

    modificado[i] = resultado;
}

    return modificado; 
}

function fnordenar(vetor) {
    return vetor.sort(function(a, b) {
        return a.localeCompare(b);
    });
}

function fnCaixaAlta(vetor) {
    let modificado = [];
    
    for(let i = 0; i < vetor.length; i++) {
        modificado[i] = vetor[i].toUpperCase();
    }
    
        return modificado; 
    }

export default {
    capitalizar: fncapitalizar,
    capitalizarNovo: fnCapitalizarNovo,
    ordenar: fnordenar,
    caixaAlta: fnCaixaAlta
};


