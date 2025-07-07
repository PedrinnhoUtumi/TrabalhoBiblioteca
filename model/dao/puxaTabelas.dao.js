const db = require("../../config/database")

exports.puxaTabelas = async () => {
    const tabelas = ['autor', 'bibliotecario', 'categoria', 'cliente', 'curso', 'dividas', 'emprestimo', 'livro', 'subcategoria']
    const resposta = {}
    let result
    for (const tabela of tabelas) {
        if (tabela === 'livro') {
            result = await db.query(`SELECT * FROM ${tabela} WHERE indisponivel = 'false'`);
        } else {
            result = await db.query(`SELECT * FROM ${tabela}`);
        }
        resposta[tabela] = result.rows;
    }
    return resposta
}