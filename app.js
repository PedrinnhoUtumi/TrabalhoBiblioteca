const bibliotecarioDAO = require("./model/bibliotecario.dao")
const bibliotecarioRN = require("./model/bibliotecario.rn");
const bibliotecarioController = require("./Controller/bibliotecario.controller");
const bibliotecario = require("./entities/bibliotecario")


const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Servidor ON")
})

app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
    
})