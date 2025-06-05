const db = require("../../config/database")
const md5 = require("md5")

exports.criarBibliotecario = async function(novoBilbiotecario){
    const response = await db.query(
        'INSERT INTO bibliotecario (nomeBibliotecario, senha) VALUES ($1, $2) RETURNING *',
        [novoBilbiotecario.nomeBibliotecario, md5(novoBilbiotecario.senha)]
    );
    
    return "Bibliotecario cadastrado com sucesso!";
}


exports.listarBibliotecario = async function(){
    const {rows} = await db.query("SELECT * FROM bibliotecario");
    return rows;
};


exports.consultarBibliotecario = async function(idBibliotecario, nomeBibliotecario) {
    if(idBibliotecario !== null) {
        const {rows} = await db.query (
            `SELECT * FROM Bibliotecario WHERE idABibliotecario = ${idBibliotecario}`
        );
        return rows
    } else {
        const {rows} = await db.query (
            `SELECT * FROM Bibliotecario WHERE nomeBibliotecario = ${nomeBibliotecario}`
        );
        return rows
    }
}

exports.removerBibliotecario = async function(idBibliotecario, nomeBibliotecario) {
    if(idBibliotecario !== null) {
        const resposta = await db.query (
            `DELETE FROM Bibliotecario WHERE idAutor = ${idBibliotecario}`
        );
        return true
    } else {
        const resposta = await db.query (
            `DELETE FROM Bibliotecario WHERE nomeAutor = ${nomeBibliotecario}`
        );
        return true
    }
};

exports.atualizarBibliotecario = async function(nomeBibliotecario) {
    const resposta = await db.query (
        `UPDATE Bibliotecario SET nomeBibliotecario = ${nomeBibliotecario}`
    )
    return true
};