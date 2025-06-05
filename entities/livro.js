class Livro {
    constructor(isbn, titulo, idCategoria, idAutor, editora, edicao, qtdEstoque, foto, resumo ){
        this.isbn = isbn;   
        this.titulo = titulo;
        this.idCategoria = idCategoria;
        this.idAutor = idAutor;
        this.editora = editora;
        this.edicao = edicao;
        this.qtdEstoque = qtdEstoque
        this.foto = foto;
        this.resumo = resumo;
    }
}

module.exports = Livro;