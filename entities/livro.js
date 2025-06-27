class Livro {
    constructor(ISBN, titulo, idCategoria, idAutor, editora, edicao, qtdEstoque, foto, resumo ){
        this.ISBN = ISBN;   
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