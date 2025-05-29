const bibliotecarioDAO = require("./model/bibliotecario.dao")
const bibliotecarioRN = require("./model/bibliotecario.rn");
const bibliotecarioController = require("./controller/bibliotecario.controller");
const bibliotecario = require("./entities/bibliotecario")
const usuarioController = require("./controller/usuario.controller")
const cors = require("cors")

const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
  }));

app.get("/", (req, res) => {
    res.send("Servidor ON")
})

app.get("/cadastrar", async function(req, res){
    // const novoBilbiotecario = new bibliotecario(req.body.nome, req.body.senha);
    // const resultado = usuarioController.criarBibliotecario(novoBilbiotecario);

    
    // resultado.then(resp => {resp ? res.redirect('/listarUsuarios') : res.render('cadastroUsuario', {usuario: novoBilbiotecario, mensagem: "erro: Username deve ter 8 caracteres!"} )})
    const { nome, senha } = req.body;

    try {
      const query = `
      INSERT INTO bibliotecario (NAME, SENHA)
      VALUES ('${nome}', '${senha}')
    `;
      const response = await axios.post(
        url,
        { q: query },
        {
          auth: {
            username: "postgres",
            password: "postgres",
          },
        }
      );
      res
        .status(201)
        .json({ message: "Usuário criado com sucesso", response: response.data });
    } catch (error) {
      console.error("Erro ao buscar myuser:", error.message);
      res.status(500).json({ error: "Erro ao buscar myuser" });
    }
    
})

app.get("/cadastrarUsuario", function(req, res){
  res.render("/cadastrar")
})

app.post("/cadastrarUsuario", function(req, res){
  const novoUsuario = new usuario(req.body.RA, req.body.nome, req.body.profissao, req.body.curso, req.body.email. req.body.data_nasc)
  const resultado = usuarioController.criarUsuario(novoUsuario)
})


app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
    
})