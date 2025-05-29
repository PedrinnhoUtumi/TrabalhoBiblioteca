const db = require("../config/database")
const md5 = require("md5")

exports.criarUsuario = async function(novoUsuario){
    const resposta = await db.query(
        'INSERT INTO Usuario (RA, nome, profissao, curso, email, data_nasc) VALUES ($1, $2, $3, $4, $5, $6)',
    );
    
    return "Usuario cadastrado com sucesso!";
}

exports.procurarUsuario = async function(RA){
    const {rows} = await db.query(
        `SELECT * FROM Usuario WHERE RA = '${RA}'`
    );
    
    return rows;
}