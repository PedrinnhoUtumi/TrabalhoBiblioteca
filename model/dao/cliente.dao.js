const db = require("../../config/database")
const md5 = require("md5")

exports.criarUsuario = async function(novoCliente){
    const resposta = await db.query(
        'INSERT INTO Cliente (nome, RA, idProfissao, telefone, data_nasc, email, curso) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [novoCliente.nome, novoCliente.RA, novoCliente.idProfissao, novoCliente.telefone, novoCliente.data_nasc, novoCliente.email, novoCliente.curso]
    );
    
    return "Cliente cadastrado com sucesso!";
}

exports.procurarUsuario = async function(RA){
    const {rows} = await db.query(
        `SELECT * FROM Usuario WHERE RA = '${RA}'`
    );
    
    return rows;
}