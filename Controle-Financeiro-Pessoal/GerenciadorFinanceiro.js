import Transacao from "./Transacao.js";

export default class GerenciadorFinanceiro {
    constructor(){
        this.transacoes = [];
    }

    getTransacoes() {
        return this.transacoes;
    }

    adicionarTransacao(tipo, descricao, valor) {
        try {
            const novaTransacao = new Transacao(tipo, descricao, valor);
            this.transacoes.push(novaTransacao);
        } catch (error) {
            console.error("Erro ao adicionar transação:", error.message);
            alert(error.message);
        }
    }

    removerTransacao(id) {
        this.transacoes = this.transacoes.filter(transacao => transacao.id !== id);
    }

    calcularTotalReceitas() {
        return this.transacoes
            .filter(transacao => transacao.tipo === 'receita')
            .reduce((soma, transacao) => soma + transacao.valor, 0);
    }

    calcularTotalDespesas() {
        return this.transacoes
            .filter(transacao => transacao.tipo === 'despesa')
            .reduce((soma, transacao) => soma + transacao.valor, 0);
    }

    calcularSaldoTotal() {
        return this.calcularTotalReceitas() - this.calcularTotalDespesas();
    }
    
}
