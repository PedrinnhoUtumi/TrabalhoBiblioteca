const bibliotecarioDAO = require("../model/dao/bibliotecario.dao")
const bibliotecarioRN = require("../model/rn/bibliotecario.rn");

exports.criarBibliotecario = async function(novoBilbiotecario){
    try {
        // if (bibliotecarioRN.validarSenha(novoBilbiotecario.senha)) {
            return await bibliotecarioDAO.criarBibliotecario(novoBilbiotecario);
        // }
    }
    catch (erro) {
        console.error("Erro ao criar bibliotecario", erro)
        return "Não foi possível criar o bibliotecario!"
    }
}
