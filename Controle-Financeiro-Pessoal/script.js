import GerenciadorFinanceiro from "./GerenciadorFinanceiro";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    const descricaoInput = document.querySelector('#descricaoInput');
    const valorInput = document.querySelector('#valorInput');
    const tipoInput = () =>document.querySelector('input[name="tipo"]:checked'); 

    const listaTransacoes = document.querySelector('#taskList');

    const totalReceitas = document.querySelector('#totalReceitas');
    const totalDespesas = document.querySelector('#totalDespesas');
    const saldoFinal = document.querySelector('#saldoTotal');

    const gerenciadorFinanceiro = new GerenciadorFinanceiro();

    function formatarMoeda(valor){
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function renderResumo() {
        totalReceitas.textContent = formatarMoeda(gerenciadorFinanceiro.totalReceitas());
        totalDespesas.textContent = formatarMoeda(gerenciadorFinanceiro.totalDespesas());

        const saldo = meuGerenciador.calcularSaldo();
        saldoFinal.textContent = formatarMoeda(saldo);

        saldoFinal.classList.toggle('valor-despesa', saldo < 0);
        saldoFinal.classList.toggle('valor-receita', saldo >= 0);
    }

    
});
