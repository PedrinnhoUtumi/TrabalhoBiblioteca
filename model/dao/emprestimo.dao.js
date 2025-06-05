const db = require("../../config/database")

exports.criarEmprestimo = async function(emprestimo, livro, cliente){
    const response = await db.query(
        'INSERT INTO emprestimo (isbnlivro, status, idcliente, dataemprestimo) VALUES ($1, $2, $3, $4) RETURNING *',
        [livro.isbn, emprestimo.status, cliente.idCliente, emprestimo.dataEmprestimo]
    );
    
    return "SubCategoria cadastrada com sucesso!";
}