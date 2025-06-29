export default class Tarefa {
    constructor(texto) {
        this.id = Date.now(); // Gera um ID único baseado no timestamp
        this.texto = texto;
        this.concluida = false;
    }

    alternarConclusao() {
        this.concluida = !this.concluida;
    }
}