const livroDAO = require("../model/dao/livro.dao")

exports.criarLivro = async function(novoLivro){
    try {

        return await livroDAO.criarLivro(novoLivro)

    }
    catch (erro) {
        console.error("Erro ao criar usuário", erro)
        return "Erro ao criar usuário"
    }
}
