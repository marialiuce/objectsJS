import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

let ingredientesOdernados = modificador.ordenar(ingredientes, 'nome');
let containerIngredientes = document.querySelector('#container-ingredientes');

for (let ingrediente of ingredientesOdernados) {
    let textoHTML = `
            <div class="ingredientes">
                <img src="img/${ingrediente.img}" />
                <p class="nome-ingrediente">${ingrediente.nome}</p>
            </div>
    `;
    containerIngredientes.innerHTML += textoHTML;
}





