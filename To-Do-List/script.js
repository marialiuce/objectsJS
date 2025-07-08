import ListaDeTarefas from './ListaDeTarefas.js';

document.addEventListener('DOMContentLoaded', () => {
    // Seletores do DOM
    const taskForm = document.querySelector('form');
    const taskInput = document.querySelector('#taskInput');
    const taskList = document.querySelector('#taskList');
    const countSpan = document.querySelector('#count');
    const completedSpan = document.querySelector('#completed');

    const minhaLista = new ListaDeTarefas();

    function renderTasks() {
        taskList.innerHTML = '';

        const tarefas = minhaLista.getTarefas();

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

            const completeButton = document.createElement('button');
            completeButton.classList.add('complete-btn');
            completeButton.innerHTML = tarefa.concluida ? '<i class="fas fa-undo"></i>' : '<i class="fas fa-check"></i>';
            completeButton.addEventListener('click', () => {
                minhaLista.alternarConclusao(tarefa.id);
                renderAll(); 
            });

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteButton.addEventListener('click', () => {
                minhaLista.removerTarefa(tarefa.id);
                renderAll(); 
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

    function renderAll() {
        renderTasks();
        updateTaskCount();
    }


    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        minhaLista.adicionarTarefa(taskInput.value);
        taskInput.value = '';
        renderAll(); 
    });

    
    renderAll();
});

