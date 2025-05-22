const bibliotecarioDAO = require("../model/bibliotecario.dao")
const bibliotecarioRN = require("../model/bibliotecario.rn");

exports.criarUsuario = async function(novoBilbiotecario){
    const erros = [];

    const user = await bibliotecarioDAO.procurarBibliotecarioPeloUsuario(novoBilbiotecario.usuario);

    if(user.length != 0){
        erros.push("Erro: usuario já cadastrado!");
    }

    if(!bibliotecarioRN.validarUsuario(novoBilbiotecario.usuario)){        
        erros.push("Erro: usuario deve ter entre 5 e 10 caracteres!");
    }

    if(!bibliotecarioRN.validarSenha(novoBilbiotecario.senha)){
        erros.push("Erro: a senha deve pelo menos 8 caracteres, contendo letras maiúsculas, minúsculas, dígitos e caracteres especiais ($*&@#)!");
    }
    
    if(erros.length > 0){
        return erros;
    }

    await bibliotecarioDAO.criarUsuario(novoBilbiotecario);
    return [];
}
