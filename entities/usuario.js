class Usuario {
    constructor(RA, nome, profissao, telefone, curso, email, data_nasc) {
        this.RA = RA;
        this.nome = nome;
        this.profissao = profissao;
        this.telefone = telefone;
        this.curso = curso;
        this.email = email;
        this.data_nasc = data_nasc;
    }
}

module.exports = Usuario;