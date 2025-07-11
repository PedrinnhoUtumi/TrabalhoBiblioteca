class Emprestimo {
    constructor(isbnLivro, status, idCliente, dataEmprestimo, email, qtdemprestimo) {
        this.isbnLivro = isbnLivro;
        this.status = status;
        this.idCliente = idCliente;
        this.dataEmprestimo = dataEmprestimo;
        this.email = email;
        this.qtdemprestimo = qtdemprestimo
    }
}

module.exports = Emprestimo;