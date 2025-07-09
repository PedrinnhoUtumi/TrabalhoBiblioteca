class Livro {
    constructor(ISBN, titulo, idCategoria, idAutor, editora, edicao, qtdEstoque, imagemCapa, resumo, indisponivel = "false" ){
        this.ISBN = ISBN;   
        this.titulo = titulo;
        this.idCategoria = idCategoria;
        this.idAutor = idAutor;
        this.editora = editora;
        this.edicao = edicao;
        this.qtdEstoque = qtdEstoque
        this.imagemCapa = imagemCapa;
        this.resumo = resumo;
        this.indisponivel = indisponivel
    }
}

module.exports = Livro;