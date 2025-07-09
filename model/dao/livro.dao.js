const db = require("../../config/database")


exports.criarLivro = async function(novoLivro){
    console.log("QTDEESTOQUE:", novoLivro.qtdEstoque);

    // const extensao_arquivo = novoLivro.foto.nome.split(".").pop();
    
    
    const response = await db.query(
        'INSERT INTO livro (isbn, titulo, idCategoria, idAutor, editora, edicao, qtdestoque, imagemcapa, resumo, indisponivel) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
        [novoLivro.ISBN, novoLivro.titulo, novoLivro.idCategoria, novoLivro.idAutor, novoLivro.editora, novoLivro.edicao, novoLivro.qtdEstoque, novoLivro.imagemCapa, novoLivro.resumo, novoLivro.indisponivel]
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

exports.indisponivel = async function(isbn) {
    const resposta = await db.query (
        `UPDATE livro
         SET indisponivel = true
         WHERE isbn = '${isbn}'`
    );
    return true
};

exports.atualizarLivros = async function(novoLivro, ISBN) {
    console.log("novo Livro", novoLivro.ISBN);

    const resposta = await db.query (
        `UPDATE livro SET ISBN = $1, titulo = $2, idCategoria = $3, idAutor = $4, editora = $5, edicao = $6, qtdEstoque = $7, imagemCapa = $8, resumo = $9 WHERE ISBN = $10`,
        [ novoLivro.ISBN, novoLivro.titulo, novoLivro.idCategoria, novoLivro.idAutor, novoLivro.editora, novoLivro.edicao, novoLivro.qtdEstoque, novoLivro.imagemCapa, novoLivro.resumo, ISBN]
        
    )
    if(novoLivro.qtdEstoque === 0) {
        const resposta2 = await db.query (
            `UPDATE livro SET indisponivel = true WHERE ISBN = $1`,
            [novoLivro.ISBN]
        )
    }
    console.log("qtdEstoque alterada para", novoLivro.qtdEstoque)
    console.log("Rows affected:", resposta.rowCount);
    return "Cliente alterado com sucesso"
};

