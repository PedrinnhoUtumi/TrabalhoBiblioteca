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

exports.atualizarLivros = async (novoLivro, ISBN) => {
    try {

        return await livroDAO.atualizarLivros(novoLivro, ISBN)
    } catch (error) {
        console.error("Erro atualizar", error)
        return "Erro ao atualizar"
    }
}

exports.atualizarLivro = async (isbn) => {
    try {
        return await livroDAO.indisponivel(isbn)
    } catch (error) {
        console.error("Erro atualizar", error)
        return "Erro ao atualizar"
    }
}

exports.atualizarLivro = async (isbn) => {
    try {
        return await livroDAO.indisponivel(isbn)
    } catch (error) {
        console.error("Erro atualizar", error)
        return "Erro ao atualizar"
    }
}


exports.emprestarLivro = async (isbn) => {
    try {
        return await livroDAO.emprestarLivros(isbn)
    } catch (error) {
        console.error("Erro ao listar livro", error)
        return "Erro ao listar livro"
    }
}