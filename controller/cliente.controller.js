const clienteDAO = require("../model/dao/cliente.dao")
const usuarioRN = require("../model/usuario.rn");

exports.criarUsuario = async function(novoUsuario){
    const erros = [];

    try {
        const cliente = await clienteDAO.procurarUsuario(novoUsuario.RA)

        if (cliente.length != 0) {
            erros.push("Usuário já existe!")
        }

        if (erros.length > 0) {
            return erros
        } else {
            return await clienteDAO.criarUsuario(novoUsuario)
        }

        //verificações do RN
    }
    catch (erro) {
        console.error("Erro ao criar usuário", erro)
        return "Erro ao criar usuário"
    }
}
