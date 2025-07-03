export default class Transacao {
    constructor(tipo, descricao, valor) {
        if (typeof descricao !== 'string' || descricao.trim() === '') {
            throw new Error('A descrição é obrigatória e deve ser um texto válido.');
        }
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error('O valor deve ser um número positivo.');
        }
        if (tipo !== 'receita' && tipo !== 'despesa') {
            throw new Error('O tipo deve ser "receita" ou "despesa".');
        }
        this.id = Date.now();
        this.descricao = descricao;
        this.valor = valor;
        this.tipo = tipo;
        this.data = new Date();
    }
}