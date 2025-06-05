class Emprestimo {
    constructor(isbnLivro, status, idCliente, dataEmprestimo) {
        this.isbnLivro = isbnLivro;
        this.status = status;
        this.idCliente = idCliente
        this.dataEmprestimo = dataEmprestimo
    }
}

module.exports = Emprestimo;