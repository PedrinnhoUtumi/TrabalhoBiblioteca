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
