
const bibliotecarioController = require("./controller/bibliotecario.controller");
const bibliotecario = require("./entities/bibliotecario")

const autorController = require("./controller/autor.controller")
const autor = require("./entities/autor")

const clienteController = require("./controller/cliente.controller")
const cliente = require("./entities/cliente")

const livroController = require("./controller/livro.controller")
const livro = require("./entities/livro")
// const usuarioController = require("./controller/usuario.controller")
// const usuarioDAO = require("./model/usuario.dao")
// const usuarioRN = require("./model/usuario.rn")

// const axios = require("axios")
const cors = require("cors")

const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = 3000

const db = require('./config/database')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Servidor ON")
})

// app.get("/teste", (req, res) => {
//     (async () => {
//         try {
//             const res = await db.query('SELECT NOW()');
//             console.log('✅ Conectado com sucesso! Hora atual do banco:', res.rows[0].now);
//         } catch (err) {
//             console.error('❌ Erro ao conectar com o banco:', err);
//         }
//     })();
// })

app.get("/api/usuario", async (req, res) => {
    try {
        const resposta = await clienteController.listarUsuarios()
        res.status(200).json({message: resposta})
    } catch (error) {
        console.error("Erro ao listar usuario:", error.message);
        res.status(500).json({ error: "Erro ao listar usuario" });
    }
})

app.delete("/api/usuario/:id", async (req, res) => {
    const usuarioDeletado = req.params.id
    try {
        const resposta = await clienteController.removerUsuario(usuarioDeletado)
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

// app.post("/cadastrarAutor", async (req, res) => {
//     const { nomeAutor } = req.body;
//     const novoAutor = new autor(nome, senha)
//     try {
//         const resposta = await autorController.criarAutor(novoAutor)
//         console.log(resposta);

//         res.status(201).json({ message: resposta });

//     } catch (error) {
//         console.error("Erro ao criar Bibliotecario:", error.message);
//         res.status(500).json({ error: "Erro ao criar Bibliotecario" });
//     }

// })

app.post("/cadastroLivro", async (req, res) => {
    const {ISBN, categoria, editora, titulo, autor, edicao, resumo} = req.body
    const novoLivro = new livro(ISBN, categoria, editora, titulo, autor, edicao, resumo)
    try {
        const resposta = await livroController.criar(novoLivro)
        console.log(resposta);

        res.status(201).json({ message: resposta });

    } catch (error) {
        console.error("Erro ao criar Cliente:", error.message);
        res.status(500).json({ error: "Erro ao criar Cliente" });
    }
})


app.post("/cadastroUsuario", async function (req, res) {
    const { nomeCliente, RA, idProfissao, telefone, dataNasc, email, codigoCurso } = req.body
    const novoCliente = new cliente(nomeCliente, RA, idProfissao, telefone, dataNasc, email, codigoCurso)
    console.log(novoCliente.dataNasc);
    
    try {
        const resposta = await clienteController.criarUsuario(novoCliente)
        console.log(resposta);

        res.status(201).json({ message: resposta });

    } catch (error) {
        console.error("Erro ao criar Cliente:", error.message);
        res.status(500).json({ error: "Erro ao criar Cliente" });
    }
})



app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
})