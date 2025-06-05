const db = require("../../config/database")

exports.criarLivro = async function(novoLivro, categoria, autor){
    const response = await db.query(
        'INSERT INTO livro (isbn, titulo, idCategoria, idAutor, editora, edicao, qtdEstoque, resumo) VALUES ($1) RETURNING *',
        [novoLivro.isbn, novoLivro.titulo, categoria.idCategoria, autor.idAutor, novoLivro.editora, novoLivro.edicao. novoLivro.qtdEstoque, novoLivro.resumo]
    );  
    
    return "Livro cadastrado com sucesso!";
}