class Cliente {
    constructor(nomeCliente, RA, idProfissao, telefone, dataNasc, email, codigoCurso) {
        this.nomeCliente = nomeCliente;
        this.RA = RA;
        this.idProfissao = idProfissao;
        this.telefone = telefone;
        this.dataNasc = dataNasc;
        this.email = email;
        this.codigoCurso = codigoCurso;
    }
}

module.exports = Cliente;