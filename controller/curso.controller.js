const cursoDAO = require("../model/dao/curso.dao")

exports.criarCurso = async function(novocurso){
    try {
        return await cursoDAO.criarCurso(novocurso)

    }
    catch (erro) {
        console.error("Erro ao criar curso", erro)
        return "Erro ao criar curso"
    }
}

exports.listarCurso = async () => {
    try {
        return await cursoDAO.listarCurso()
    } catch (error) {
        console.error("erro ao listar curso", erro)
    }
}