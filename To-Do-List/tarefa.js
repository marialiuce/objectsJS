export default class Tarefa {
    constructor(texto) {
        this.id = Date.now();
        this.texto = texto;
        this.concluida = false;
    }

    alternarConclusao() {
        this.concluida = !this.concluida;
    }
}