const db = require("../../config/database")

exports.criarLivro = async function(novoLivro, categoria, autor){
    const response = await db.query(
        'INSERT INTO livro (isbn, titulo, idCategoria, idAutor, editora, edicao, qtdEstoque, resumo) VALUES ($1) RETURNING *',
        [novoLivro.ISBN, novoLivro.titulo, categoria.idCategoria, autor.idAutor, novoLivro.editora, novoLivro.edicao. novoLivro.qtdEstoque, novoLivro.resumo]
    );  
    
    return "Livro cadastrado com sucesso!";
}

exports.listarLivro = async function(){
    const {rows} = await db.query("SELECT * FROM livro");
    return rows;
};


exports.consultarLivro = async function(isbn, nomeLivro, nomeAutor) {
    if(isbn !== null) {
        const {rows} = await db.query (
            `SELECT * FROM livro WHERE isbn = ${isbn}`
        );
        return rows
    }else if(nomeLivro !== null){
        const {rows} = await db.query (
            `SELECT * FROM autor WHERE nomeLivro = ${nomeLivro}`
        );
        return rows
    } else {
        const {rows} = await db.query (
            `SELECT * FROM autor WHERE nomeAutor = ${nomeAutor}`
        );
        return rows
    }
}

exports.removerLivro = async function(isbn, nomeLivro) {
    if(idAutor !== null) {
        const resposta= await db.query (
            `DELETE FROM autor WHERE isbn = ${isbn}`
        );
        return true
    } else {
        const resposta = await db.query (
            `DELETE FROM autor WHERE nomeLivro = ${nomeLivro}`
        );
        return true
    }
};

exports.atualizarLivro = async function(nomeLivro) {
    const resposta = await db.query (
        `UPDATE autor SET nomeAutor = ${nomeAutor}`
    )
    return true
};