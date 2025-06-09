const db = require("../../config/database")

exports.criarDividas = async function(novaDivida, emprestimo){
    const response = await db.query(
        'INSERT INTO dividas (idemp, dataatual, multafinal, valordia) VALUES ($1, $2, $3, $4) RETURNING *',
        [emprestimo.idEmprestimo, novaDivida.dataAtual, novaDivida.multaFinal, novaDivida.valorDia]
    );
    
    return "SubCategoria cadastrada com sucesso!";
};

exports.listarDividas = async function(){
    const {rows} = await db.query("SELECT * FROM Dividas");
    return rows;
};


exports.consultarDividas= async function(idemp) {

    const {rows} = await db.query (
        `SELECT * FROM Dividas WHERE idemp = ${idemp}`
    );
    return rows
};

exports.removerDividas = async function(idemp) {
    const resposta = await db.query (
        `DELETE FROM Dividas WHERE idemp = ${idemp}`
    );
    return true
};

exports.atualizarDividas = async function(idemp, codigoDividas) {
    if (idemp !== null) {
        const resposta = await db.query (
            `UPDATE Dividas SET idemp = ${idemp}`
        )
        return true
    } else {
        const resposta = await db.query (
            `UPDATE Dividas SET codigoDividas = ${codigoDividas}`
        )
        return true
    };
};