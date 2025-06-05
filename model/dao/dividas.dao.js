const db = require("../../config/database")

exports.criarDividas = async function(novaDivida, emprestimo){
    const response = await db.query(
        'INSERT INTO dividas (idemp, dataatual, multafinal, valordia) VALUES ($1, $2, $3, $4) RETURNING *',
        [emprestimo.idEmprestimo, novaDivida.dataAtual, novaDivida.multaFinal, novaDivida.valorDia]
    );
    
    return "SubCategoria cadastrada com sucesso!";
}