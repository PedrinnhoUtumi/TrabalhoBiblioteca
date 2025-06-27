const db = require("../../config/database")

exports.criarAutor = async function(novoAutor){
    const response = await db.query(
        'INSERT INTO autor (nomeAutor) VALUES ($1) RETURNING *',
        [novoAutor.nomeAutor]
    );
    
    return "Autor cadastrado com sucesso!";
};

exports.listarAutor = async function(){
    const {rows} = await db.query("SELECT * FROM autor");
    return rows;
};


exports.consultarAutor = async function(nomeAutor) {
    const {rows} = await db.query (
        `SELECT * FROM autor WHERE nomeAutor = ${nomeAutor}`
    );
    return rows
};


exports.removerAutor = async function(idAutor, nomeAutor) {
    if(idAutor !== null) {
        const resposta= await db.query (
            `DELETE FROM autor WHERE idAutor = ${idAutor}`
        );
        return true
    } else {
        const resposta = await db.query (
            `DELETE FROM autor WHERE nomeAutor = ${nomeAutor}`
        );
        return true
    }
};

exports.atualizarAutor = async function(nomeAutor) {
    const resposta = await db.query (
        `UPDATE autor SET nomeAutor = ${nomeAutor}`
    )
    return true
};