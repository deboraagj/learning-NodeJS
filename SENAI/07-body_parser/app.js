/**
 * 
 * bodyParser -> Pacote para trabalhar com formulários 
 * 
 * npm install body-parser --save
 * 
 */

// Importação das bibliotecas 
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Middlwares
app.use(bodyParser.urlencoded({extended: false}))

// Rotas
app.get("/", (req, res) => {
    res.sendFile(__dirname+'/index.html');    
})

app.post("/add", function(req,res) {
    res.send("Nome: " + req.body.nome + "</br> Email: " + req.body.email)
})

const PORT = 8080;
app.listen(PORT, () => {
   console.log("Servidor rodando na url https://localhost:"+PORT); 
})