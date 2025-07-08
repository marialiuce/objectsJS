import Tarefa from './tarefa.js';

export default class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(textoDaTarefa) {
        if (textoDaTarefa.trim() === '') {
            alert('Por favor, digite uma tarefa!');
            return;
        }
        const novaTarefa = new Tarefa(textoDaTarefa);
        this.tarefas.push(novaTarefa);
    }

    removerTarefa(idDaTarefa) {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== idDaTarefa);
    }

    alternarConclusao(idDaTarefa) {
        const tarefa = this.tarefas.find(tarefa => tarefa.id === idDaTarefa);
        if (tarefa) {
            tarefa.alternarConclusao();
        }
    }
    
    getTarefas() {
        return this.tarefas;
    }

    getTotalDeTarefas() {
        return this.tarefas.length;
    }

    getTotalDeConcluidas() {
        return this.tarefas.filter(tarefa => tarefa.concluida).length;
    }
}