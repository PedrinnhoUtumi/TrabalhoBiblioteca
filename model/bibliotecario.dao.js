const db = require("../config/database")
const md5 = require("md5")



exports.criarUsuario = async function(novoBilbiotecario){
    const resposta = await db.query(
        'INSERT INTO usuario (usuario, senha) VALUES ($1, $2)',
        [novoBilbiotecario.usuario, md5(novoBilbiotecario.senha)]
    );
    
    return "Produto cadastrado com sucesso!";
}

exports.procurarBibliotecarioPeloUsuario = async function(usuario){
    const {rows} = await db.query(
        `SELECT * FROM usuario WHERE usuario = '${usuario}'`
    );
    
    return rows;
}