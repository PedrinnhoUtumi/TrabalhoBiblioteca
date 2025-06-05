const db = require("../../config/database")

exports.criarSubCategoria = async function(idCategoria, nomeSubCategoria){
    const response = await db.query(
        'INSERT INTO subCategoria (idCategoria, nomeSubCategoria) VALUES ($1) RETURNING *',
        [SubCategoria.idCategoria, SubCategoria.nomeSubCategoria]
    );
    
    return "SubCategoria cadastrada com sucesso!";
}