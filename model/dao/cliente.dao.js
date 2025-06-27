const db = require("../../config/database")
const md5 = require("md5")

exports.criarUsuario = async function(novoCliente){
    const resposta = await db.query(
        'INSERT INTO Cliente (nomeCliente, RA, idProfissao, telefone, dataNasc, email, codigoCurso) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [novoCliente.nomeCliente, novoCliente.RA, novoCliente.idProfissao, novoCliente.telefone, novoCliente.dataNasc, novoCliente.email, novoCliente.codigoCurso]
    );
    
    return "Cliente cadastrado com sucesso!";
}

exports.procurarUsuario = async function(RA, nome, dataNasc){
    if(RA !== null) {
        const {rows} = await db.query(
            `SELECT * FROM Usuario WHERE RA = '${RA}'`
        );
        return rows;
    } else if (nome !== null) {
        const {rows} = await db.query(
            `SELECT * FROM Usuario WHERE nome = '${nome}'`
        );
        return rows;
    } else {
        const {rows} = await db.query(
            `SELECT * FROM Usuario WHERE dataNasc = '${dataNasc}'`
        );
        return rows;
    }
};

exports.listarUsuario = async function(){
    const {rows} = await db.query("SELECT * FROM cliente");
    
    return rows;
};

exports.removerUsuario = async function(idUsuario) {
    const resposta = await db.query (
        `DELETE FROM Cliente WHERE idcliente = ${idUsuario}`
    );
    return true

};

exports.atualizarUsuario = async function(novoCliente) {
    const resposta = await db.query (
        `UPDATE cliente SET nomecliente = '${novoCliente.nomeCliente}', ra = '${novoCliente.RA}', idprofissao = ${novoCliente.idProfissao}, telefone = '${novoCliente.telefone}', datanasc = '${novoCliente.dataNasc}', email = '${novoCliente.email}', codigocurso = '${novoCliente.codigoCurso}' WHERE nomecliente = ${novoCliente.nomeCliente}`
    )
    return true
};
