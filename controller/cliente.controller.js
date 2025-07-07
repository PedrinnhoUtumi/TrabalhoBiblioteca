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

exports.listarUsuarios = async () => {
    try {
        return await clienteDAO.listarUsuario()
    } catch (error) {
        console.error("Erro ao listar usuário", error)
        return "Erro ao listar usuário"
    }
}

exports.removerUsuario = async (idUsuario) => {
    try {
        return await clienteDAO.removerUsuario(idUsuario)
    } catch (error) {
        console.error("Erro ao listar usuário", error)
        return "Erro ao listar usuário"
    }
}

exports.atualizarUsuario = async (novoCliente, idCliente) => {
    try {

        return await clienteDAO.atualizarUsuario(novoCliente, idCliente)
    } catch (error) {
        console.error("Erro atualizar", error)
        return "Erro ao atualizar"
    }
}
