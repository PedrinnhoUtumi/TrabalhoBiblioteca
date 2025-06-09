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

exports.listarUusario = async function(){
    const {rows} = await db.query("SELECT * FROM cliente");
    return rows;
};

exports.removerUsuario = async function(idUsuario, nomeUsuario) {
    if(idUsuario !== null) {
        const resposta = await db.query (
            `DELETE FROM Usuario WHERE idUsuario = ${idUsuario}`
        );
        return true
    } else {
        const resposta = await db.query (
            `DELETE FROM Usuario WHERE nomeUsuario = ${nomeUsuario}`
        );
        return true
    }
};

exports.atualizarUsuario = async function(nomeUsuario) {
    const resposta = await db.query (
        `UPDATE Usuario SET nomeUsuario = ${nomeUsuario}`
    )
    return true
};
