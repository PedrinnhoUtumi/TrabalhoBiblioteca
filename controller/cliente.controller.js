const clienteDAO = require("../model/dao/cliente.dao")
// const usuarioRN = require("../model/usuario.rn");

exports.criarUsuario = async function(novoUsuario){
    try {
        return await clienteDAO.criarUsuario(novoUsuario)

    }
    catch (erro) {
        console.error("Erro ao criar usuário", erro)
        return "Erro ao criar usuário"
    }
}
