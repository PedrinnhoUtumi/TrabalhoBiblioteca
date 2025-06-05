const autorDAO = require("../model/dao/autor.dao")

exports.criarAutor = async function(autor){
    try {
        return await autorDAO.criarAutor(autor);
    }
    catch (erro) {
        console.error("Erro ao criar Autor", erro)
        return "Não foi possível criar o Autor!"
    }
}
