const db = require("../../config/database")

exports.puxaTabelas = async () => {
    const tabelas = ['autor', 'bibliotecario', 'categoria', 'cliente', 'curso', 'dividas', 'emprestimo', 'livro', 'subcategoria']
    resposta = {}
    for (const tabela of tabelas) {
        const result = await db.query(`SELECT * FROM ${tabela}`);
        resposta[tabela] = result.rows;
    }
    return resposta
}