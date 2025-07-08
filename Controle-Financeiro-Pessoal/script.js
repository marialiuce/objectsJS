import GerenciadorFinanceiro from './GerenciadorFinanceiro.js';

document.addEventListener('DOMContentLoaded', () => {

    // --- SELETORES DO DOM ---
    const form = document.querySelector('form');
    const descricaoInput = document.querySelector('#descricaoInput');
    const valorInput = document.querySelector('#valorInput');
    const tipoInput = () => document.querySelector('input[name="tipo"]:checked'); 
    
    const listaTransacoesEl = document.querySelector('#taskList');
    
    const totalReceitasEl = document.querySelector('#totalReceitas');
    const totalDespesasEl = document.querySelector('#totalDespesas');
    const saldoFinalEl = document.querySelector('#saldoFinal');

    // --- INSTÂNCIA PRINCIPAL ---
    const meuGerenciador = new GerenciadorFinanceiro();

    function formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function renderResumo() {
        const totalReceitas = meuGerenciador.calcularTotalReceitas();
        const totalDespesas = meuGerenciador.calcularTotalDespesas();
        const saldo = meuGerenciador.calcularSaldo();

        totalReceitasEl.textContent = formatarMoeda(totalReceitas);
        totalDespesasEl.textContent = formatarMoeda(totalDespesas);
        saldoFinalEl.textContent = formatarMoeda(saldo);

        saldoFinalEl.classList.toggle('valor-despesa', saldo < 0);
        saldoFinalEl.classList.toggle('valor-receita', saldo >= 0);
    }

    function renderTransacoes() {
        listaTransacoesEl.innerHTML = ''; 

        const transacoes = meuGerenciador.getTransacoes();

        transacoes.forEach(transacao => {
            const li = document.createElement('li');
            li.setAttribute('data-id', transacao.id); 

            const descricao = document.createElement('span');
            descricao.textContent = transacao.descricao;

            const valor = document.createElement('span');
            const valorComPrefixo = transacao.tipo === 'receita' 
                ? `+ ${formatarMoeda(transacao.valor)}` 
                : `- ${formatarMoeda(transacao.valor)}`;
            valor.textContent = valorComPrefixo;
            valor.className = transacao.tipo === 'receita' ? 'valor-receita' : 'valor-despesa';
            
            const acoes = document.createElement('div');
            acoes.classList.add('task-actions');

            const botaoExcluir = document.createElement('button');
            botaoExcluir.classList.add('delete-btn');
            botaoExcluir.setAttribute('title', 'Excluir transação');
            botaoExcluir.innerHTML = '<i class="fas fa-trash-alt"></i>';
            botaoExcluir.addEventListener('click', () => {
                meuGerenciador.removerTransacao(transacao.id);
                renderTudo(); 
            });
            
            acoes.appendChild(botaoExcluir);
            li.appendChild(descricao);
            li.appendChild(valor);
            li.appendChild(acoes);

            listaTransacoesEl.appendChild(li);
        });
    }

    function renderTudo() {
        renderResumo();
        renderTransacoes();
    }

    // --- MANIPULADOR DE EVENTOS ---
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const descricao = descricaoInput.value.trim();
        const valor = parseFloat(valorInput.value);

        if (descricao === '' || isNaN(valor) || valor <= 0) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        const tipo = tipoInput().value;

        meuGerenciador.adicionarTransacao(descricao, valor, tipo);

        renderTudo();
        form.reset();
        descricaoInput.focus();
    });

    renderTudo();
});

