import ListaDeTarefas from './lista-de-tarefas.js';

document.addEventListener('DOMContentLoaded', () => {
    // Seletores do DOM
    const taskForm = document.querySelector('form');
    const taskInput = document.querySelector('#taskInput');
    const taskList = document.querySelector('#taskList');
    const countSpan = document.querySelector('#count');
    const completedSpan = document.querySelector('#completed');

    // Instância principal da lista
    const minhaLista = new ListaDeTarefas();

    // --- FUNÇÕES DE RENDERIZAÇÃO E MANIPULAÇÃO DO DOM ---

    function renderTasks() {
        // 1. Limpa a lista atual na tela
        taskList.innerHTML = '';

        // 2. Pega as tarefas da nossa instância
        const tarefas = minhaLista.getTarefas();

        // 3. Cria o HTML para cada tarefa e adiciona na tela
        tarefas.forEach(tarefa => {
            const listItem = document.createElement('li');
            listItem.setAttribute('data-id', tarefa.id);
            if (tarefa.concluida) {
                listItem.classList.add('completed');
            }

            const taskText = document.createElement('span');
            taskText.textContent = tarefa.texto;

            const taskActions = document.createElement('div');
            taskActions.classList.add('task-actions');
            
            // Botão de Concluir/Desfazer
            const completeButton = document.createElement('button');
            completeButton.classList.add('complete-btn');
            completeButton.innerHTML = tarefa.concluida ? '<i class="fas fa-undo"></i>' : '<i class="fas fa-check"></i>';
            completeButton.addEventListener('click', () => {
                minhaLista.alternarConclusao(tarefa.id);
                renderAll(); // Re-renderiza tudo
            });

            // Botão de Excluir
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteButton.addEventListener('click', () => {
                minhaLista.removerTarefa(tarefa.id);
                renderAll(); // Re-renderiza tudo
            });

            listItem.appendChild(taskText);
            taskActions.appendChild(completeButton);
            taskActions.appendChild(deleteButton);
            listItem.appendChild(taskActions);
            taskList.appendChild(listItem);
        });
    }

    function updateTaskCount() {
        countSpan.textContent = minhaLista.getTotalDeTarefas();
        completedSpan.textContent = minhaLista.getTotalDeConcluidas();
    }

    // Função única para redesenhar tudo
    function renderAll() {
        renderTasks();
        updateTaskCount();
    }

    // --- EVENTOS ---

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        minhaLista.adicionarTarefa(taskInput.value);
        taskInput.value = '';
        renderAll(); // Re-renderiza tudo
    });

    // Renderização inicial
    renderAll();
});

