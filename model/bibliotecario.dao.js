const db = require("../config/database")
const md5 = require("md5")



exports.criarBibliotecario = async function(novoBilbiotecario){
    const resposta = await db.query(
        'INSERT INTO bibliotecario (usuario, senha) VALUES ($1, $2)',
        [novoBilbiotecario.usuario, md5(novoBilbiotecario.senha)]
    );
    
    return "Bibliotecario cadastrado com sucesso!";
}

exports.procurarBibliotecarioPeloUsuario = async function(usuario){
    const {rows} = await db.query(
        `SELECT * FROM bibliotecario WHERE usuario = '${usuario}'`
    );
    
    return rows;
}