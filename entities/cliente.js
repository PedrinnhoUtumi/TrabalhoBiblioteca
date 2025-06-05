class Cliente {
    constructor(nomeCliente, RA, idProfissao, telefone, data_nasc, email, curso) {
        this.nomeCliente = nomeCliente;
        this.RA = RA;
        this.idProfissao = idProfissao;
        this.telefone = telefone;
        this.data_nasc = data_nasc;
        this.email = email;
        this.curso = curso;
    }
}

module.exports = Cliente;