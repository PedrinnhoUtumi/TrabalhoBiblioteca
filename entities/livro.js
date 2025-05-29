class Livro {
    constructor(ISBN, categoria, editora, foto, titulo, autor, edicao, resumo ){
        this.ISBN = ISBN;   
        this.categoria = categoria;
        this.editora = editora;
        this.foto = foto;
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
        this.resumo = resumo;
    }
}

module.exports = Livro;