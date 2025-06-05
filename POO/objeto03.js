import modificador from './modificador.js';

console.log(modificador);

let ingredientes = ['farinha', 'açúcar', 'ovo', 'leite'];
let resultadoCapitalizado = modificador.capitalizar(ingredientes);
let resultadoOrdenado = modificador.ordenar(resultadoCapitalizado);
let resultadoCaixaAlta = modificador.caixaAlta(ingredientes);


console.log(resultadoCapitalizado);
console.log(resultadoOrdenado);
console.log(resultadoCaixaAlta);

