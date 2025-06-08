
const bibliotecarioController = require("./controller/bibliotecario.controller");
const bibliotecario = require("./entities/bibliotecario")

const autorController = require("./controller/autor.controller")
const autor = require("./entities/autor")
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
    } novoBibliotecario

})

app.post("/cadastrarAutor", async (req, res) => {
    const { nomeAutor } = req.body;
    const novoAutor = new autor(nome, senha)
    try {
        const resposta = await autorController.criarAutor(novoAutor)
        console.log(resposta);

        res.status(201).json({ message: resposta });

    } catch (error) {
        console.error("Erro ao criar Bibliotecario:", error.message);
        res.status(500).json({ error: "Erro ao criar Bibliotecario" });
    }

})

app.post("/cadastroUsuario", async function (req, res) {
    const { nomeCliente, RA, idProfissao, telefone, dataNasc, email, codigoCurso } = req.body
    const novoCliente = new cliente(nomeCliente, RA, idProfissao, telefone, dataNasc, email, codigoCurso)
    try {
        const resposta = await clienteController.criar(novoCliente)
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