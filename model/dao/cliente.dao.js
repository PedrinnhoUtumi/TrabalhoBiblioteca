const db = require("../../config/database")
const md5 = require("md5")

exports.criarUsuario = async function(novoCliente){
    const resposta = await db.query(
        'INSERT INTO Cliente (nomeCliente, RA, idProfissao, telefone, dataNasc, email, codigoCurso, qtdEmprestimo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [novoCliente.nomeCliente, novoCliente.RA, novoCliente.idProfissao, novoCliente.telefone, novoCliente.dataNasc, novoCliente.email, novoCliente.codigoCurso, 0]
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



exports.atualizarUsuario = async function(novoCliente, idCliente) {
    console.log("novo CLiente", novoCliente.nomeCliente);

    const resposta = await db.query (
        `UPDATE cliente SET nomecliente = $1, ra = $2, idprofissao = $3, telefone = $4, datanasc = $5, email = $6, codigocurso = $7 WHERE idcliente = $8`,
        [ novoCliente.nomeCliente, novoCliente.RA, novoCliente.idProfissao, novoCliente.telefone, novoCliente.dataNasc, novoCliente.email, novoCliente.codigoCurso, idCliente ]
        
    )
    return "Cliente alterado com sucesso"
};
