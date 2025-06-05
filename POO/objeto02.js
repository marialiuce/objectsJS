let ingredientes = ['farinha', 'açúcar', 'ovo', 'leite'];
let modificado = [];
// Solução procedural
// Maneira errada

for(let i = 0; i < ingredientes.length; i++) {
    let letraInicial = ingredientes[i].charAt(0).toUpperCase();
    let resto = ingredientes[i].slice(1);
    let resultado = letraInicial + resto;

    modificado[i] = resultado;
}

let ordenado = modificado.sort(function(a, b) {
    return a.localeCompare(b);
});

console.log(ordenado);

