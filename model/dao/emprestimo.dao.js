const db = require("../../config/database")
const enviarEmail = require("../../config/email")

exports.criarEmprestimo = async function(emprestimo){
    const response = await db.query(
        'INSERT INTO emprestimo (isbnlivro, status, idcliente, dataemprestimo) VALUES ($1, $2, $3, $4) RETURNING *',
        [emprestimo.isbnLivro, emprestimo.status, emprestimo.idCliente, emprestimo.dataEmprestimo]
    );

    const livroResultado = await db.query(
        'SELECT qtdEstoque FROM livro WHERE ISBN = $1',
        [emprestimo.isbnLivro]
    );

        if (livroResultado.rows.length === 0) {
            console.log("Livro não encontrado.");
            return;
        }

    const qtdemprestimo = livroResultado.rows[0].qtdestoque

    if (qtdemprestimo < 1) { 
        console.log("Indisponível para emprestimo")
        return
    } 
    const resposta = await db.query (
        `UPDATE livro SET qtdEstoque = qtdEstoque - 1 WHERE ISBN = $1`,
        [emprestimo.isbnLivro]
    )



    const respostaCliente = await db.query (
        `UPDATE cliente SET qtdemprestimo = qtdemprestimo + 1 WHERE idCliente = $1`,
        [emprestimo.idCliente]
    )
    const statusDoEmprestimo = emprestimo.status ? "Livro emprestado" : "Livro devolvido"
    const mensagem = `
        Data do emprestimo: ${emprestimo.dataEmprestimo}
        ISBN do livro: ${emprestimo.isbnLivro}
        ID do cliente: ${emprestimo.idCliente}

        Esperamos devolução em até 5 dias! Sujeito a multa de R$1,00 por dia em caso de atraso

        Empreste sempre conosco!
    `
    enviarEmail(emprestimo.email, statusDoEmprestimo, mensagem)

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
         WHERE idemprestimo = '${idemprestimo}'`
    );
    return true
};