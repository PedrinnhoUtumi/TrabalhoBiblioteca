const usuarioDAO = require("../model/usuario.dao")
const usuarioRN = require("../model/usuario.rn");

exports.criarUsuario = async function(novoUsuario){
    const erros = [];

    try {
        const user = await usuarioDAO.procurarUsuario(novoUsuario.RA)

        if (user.length != 0) {
            erros.push("Usuário já existe!")
        }

        if (erros.length > 0) {
            return erros
        } else {
            await usuarioDAO.criarUsuario(novoUsuario)
        }

        //verificações do RN

    }
    catch (erro) {
        console.error("Erro ao criar usuário", erro)
        return "Erro ao criar usuário"
    }
}
