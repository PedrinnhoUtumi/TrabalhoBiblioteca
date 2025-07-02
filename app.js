
const bibliotecarioController = require("./controller/bibliotecario.controller");
const bibliotecario = require("./entities/bibliotecario")

const autorController = require("./controller/autor.controller")
const autor = require("./entities/autor")

const livroController = require("./controller/livro.controller")
const livro = require("./entities/livro")

const cursoController = require("./controller/curso.controller")
const curso = require("./entities/curso");

const clienteController = require("./controller/cliente.controller")
const cliente = require("./entities/cliente")

const puxaTabelasDAO = require("./controller/puxaTabelas.controller")

// const axios = require("axios")
const cors = require("cors")

const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

// const db = require('./config/database')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(fileupload());
// app.use('/imagens', express.static('./imagens'));


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Servidor ON")
})

app.post("/cadastrar", async (req, res) => {
    const { nome, senha } = req.body;
    const novoBibliotecario = new bibliotecario(nome, senha)
    try {
        const resposta = await bibliotecarioController.criarBibliotecario(novoBibliotecario)
        console.log(resposta);
        
        res.status(201).json({ message: resposta });

    } catch (error) {
        console.error("Erro ao criar Bibliotecario:", error.message);
        res.status(500).json({ error: "Erro ao criar Bibliotecario" });
    }

})

app.post("/cadastrarAutor", async (req, res) => {
    const { nomeAutor } = req.body;
    const novoAutor = new autor(nome, senha)
    try {
        const resposta = await autorController.criarAutor(novoAutor)
        console.log(resposta);
        
        res.status(201).json({ message: resposta });

    } catch (error) {cursoController
        console.error("Erro ao criar Bibliotecario:", error.message);
        res.status(500).json({ error: "Erro ao criar Bibliotecario" });
    }

})

app.post("/cadastrarCurso", async (req, res) => {
    const { codigoCurso, nomeCurso } = req.body;
    const novoCurso = new curso(codigoCurso, nomeCurso)
    try {
        const resposta = await cursoController.criarCurso(novoCurso)
        console.log(resposta);
        
        res.status(201).json({ message: resposta });

    } catch (error) {
        console.error("Erro ao criar Bibliotecario:", error.message);
        res.status(500).json({ error: "Erro ao criar Bibliotecario" });
    }

})

app.post("/cadastroUsuario", async (req, res) => {
    const {nomeCliente, RA, idProfissao, telefone, dataNasc, email, codigoCurso} = req.body
    const novoCliente = new cliente(nomeCliente, RA, idProfissao, telefone, dataNasc, email, codigoCurso)
    try {
        const resposta = await clienteController.criarUsuario(novoCliente)
        console.log(resposta);
        
        res.status(201).json({ message: resposta });

    } catch (error) {
        console.error("Erro ao criar Cliente:", error.message);
        res.status(500).json({ error: "Erro ao criar Cliente" });
    }
})

app.post("/cadastroLivro", async (req, res) => {
    const { ISBN, titulo, idCategoria, idAutor, editora, edicao, qtdEstoque, resumo, foto } = req.body;
    
    const novoLivro = new livro(ISBN, titulo, idCategoria, idAutor, editora, edicao, qtdEstoque, foto, resumo)
    try {
        const resposta = await livroController.criarLivro(novoLivro)
        console.log(resposta);
        
        res.status(201).json({ message: resposta });

    } catch (error) {
        console.error("Erro ao criar Bibliotecario:", error.message);
        res.status(500).json({ error: "Erro ao criar Bibliotecario" });
    }
})


app.get("/api/usuario", async (req, res) => {
    try {
        const resposta = await puxaTabelasDAO.puxaTabelas()
        res.status(200).json({message: resposta})
    } catch (error) {
        console.error("Erro ao listar usuario:", error.message);
        res.status(500).json({ error: "Erro ao listar usuario" });
    }
})


app.put("/api/usuario", async (req, res) => {
    const { dados } = req.body
    const novoCliente = new cliente(dados.nomeCliente, dados.RA, dados.idProfissao, dados.telefone, dados.dataNasc, dados.email, dados.codigoCurso)
    try {
        const resposta = await clienteController.atualizarUsuario(novoCliente)
        res.status(200).json({message: resposta})
    } catch (error) {
        console.error("Erro ao atualizar usuario:", error.message);
        res.status(500).json({ error: "Erro ao atualizar usuario" });
    }
})

app.delete("/api/usuario/:id", async (req, res) => {
    const idUsuario = req.params.id
    try {
        const resposta = await clienteController.removerUsuario(idUsuario)
        res.status(200).json({message: resposta})
    } catch (error) {
        console.error("Erro ao listar usuario:", error.message);
        res.status(500).json({ error: "Erro ao listar usuario" });
    }
})

app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
})