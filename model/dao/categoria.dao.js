const db = require("../../config/database")

exports.criarCategoria = async function(novaCategoria){
    const response = await db.query(
        'INSERT INTO categoria (nomeCategoria) VALUES ($1) RETURNING *',
        [novaCategoria.nomeCategoria]
    );
    
    return "Categoria cadastrada com sucesso!";
}

exports.listarCategoria = async function(){
    const {rows} = await db.query("SELECT * FROM categoria");
    return rows;
};


exports.consultarCategoria = async function(nomeCategoria) {

    const {rows} = await db.query (
        `SELECT * FROM categoria WHERE nomeCategoria = ${nomecategoria}`
    );
    return rows
    
};

exports.removerCategoria = async function(idcategoria, nomecategoria) {
    if(idcategoria !== null) {
        const resposta = await db.query (
            `DELETE FROM categoria WHERE idCategoria = ${idcategoria}`
        );
        return true
    } else {
        const resposta = await db.query (
            `DELETE FROM categoria WHERE nomeCategoria = ${nomecategoria}`
        );
        return true
    }
};

exports.atualizarCategoria = async function(nomecategoria) {
    const resposta = await db.query (
        `UPDATE categoria SET nomeCategoria = ${nomecategoria}`
    )
    return true
};