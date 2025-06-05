const db = require("../../config/database")

exports.criarCategoria = async function(novaCategoria){
    const response = await db.query(
        'INSERT INTO categoria (nomeCategoria) VALUES ($1) RETURNING *',
        [novaCategoria.nomeCategoria]
    );
    
    return "Categoria cadastrada com sucesso!";
}