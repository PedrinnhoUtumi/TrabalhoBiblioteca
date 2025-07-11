class Emprestimo {
    constructor(isbnLivro, status, idCliente, dataEmprestimo, email) {
        this.isbnLivro = isbnLivro;
        this.status = status;
        this.idCliente = idCliente;
        this.dataEmprestimo = dataEmprestimo;
        this.email = email
    }
}

module.exports = Emprestimo;