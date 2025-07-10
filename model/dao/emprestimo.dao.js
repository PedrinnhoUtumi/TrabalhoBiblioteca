const db = require("../../config/database")

exports.criarEmprestimo = async function(emprestimo){
    const response = await db.query(
        'INSERT INTO emprestimo (isbnlivro, status, idcliente, dataemprestimo) VALUES ($1, $2, $3, $4) RETURNING *',
        [emprestimo.isbnLivro, emprestimo.status, emprestimo.idCliente, emprestimo.dataEmprestimo]
    );
    
    const resposta = await db.query (
        `UPDATE livro SET qtdEstoque = qtdEstoque - 1 WHERE ISBN = $1`,
        [emprestimo.isbnLivro]
    )

    const respostaCliente = await db.query (
        `UPDATE cliente SET qtdemprestimo = qtdemprestimo + 1 WHERE idCliente = $1`,
        [emprestimo.idCliente]
    )

    console.log("Rows affected:", resposta);
    return "Cliente alterado com sucesso"
    
    
}

exports.atualizarEmprestimo = async function(novoEmprestimo, idEmprestimo) {
    const resposta = await db.query(
        'UPDATE emprestimo SET status = false WHERE idEmprestimo = $1',
        [novoEmprestimo.status, idEmprestimo]
    )

    if (novoEmprestimo.status === false) {
        'SELECT isbnLivro FROM emprestimo WHERE idEmprestimo = $1', 
        [idEmprestimo]
    }

    const ISBN = resposta.rows[0].isbnLivro

    const resposta2 = await db.query(
        'UPDATE livro SET qtdEstoque = qtdEstoque + 1, indisponivel = false WHERE ISBN = $1', 
        [ISBN]
    )
}

exports.indisponivel = async function(idemprestimo) {
    const resposta = await db.query (
        `UPDATE emprestimo
         SET status = false
         WHERE idCliente = '${idemprestimo}'`
    );
    return true
};