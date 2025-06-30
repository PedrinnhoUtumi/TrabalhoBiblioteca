const puxaTabelasDAO = require("../model/dao/puxaTabelas.dao")

exports.puxaTabelas = async function(){
    try {
        return await puxaTabelasDAO.puxaTabelas()

    }
    catch (erro) {
        console.error("Erro ao puxar tabelas", erro)
        return "Erro ao puxar tabelas"
    }
}
