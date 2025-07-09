const emprestimoDAO = require("../model/dao/emprestimo.dao")

exports.criarEmprestimo = async function(novoEmprestimo){
    try {
        return await emprestimoDAO.criarEmprestimo(novoEmprestimo);
    }
    catch (erro) {
        console.error("Erro ao criar novoEmprestimo", erro)
        return "Não foi possível criar o novoEmprestimo!"
    }
}

exports.removerEmprestimo = async (idemprestimo) => {
    try {
        return await emprestimoDAO.indisponivel(idemprestimo)
    } catch (error) {
        console.error("Erro atualizar", error)
        return "Erro ao atualizar"
    }
}
