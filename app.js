const bibliotecarioDAO = require("./model/bibliotecario.dao")
const bibliotecarioRN = require("./model/bibliotecario.rn");
const bibliotecarioController = require("./Controller/bibliotecario.controller");
const bibliotecario = require("./entities/bibliotecario")


const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Servidor ON")
})

app.get("/cadastrar", function(req, res){
    const novoBilbiotecario = new bibliotecario(req.body.nome, req.body.senha);
    const resultado = usuarioController.criarBibliotecario(novoBilbiotecario);

    
    resultado.then(resp => {resp ? res.redirect('/listarUsuarios') : res.render('cadastroUsuario', {usuario: novoBilbiotecario, mensagem: "erro: Username deve ter 8 caracteres!"} )})
    
})



app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
    
})