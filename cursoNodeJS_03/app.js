const express = require("express")
const app = express()
const PORT = 8080;

// ROTAS

app.get("/home", function(req, res){
    res.send("Heloo World!")
})

app.get("/contatos/:id", function(req,res){
    if(req.params.id == "1"){
        res.send("NOME: João \n NÚMERO: (77)99999-9999")
    }
    if(req.params.id == "2"){
        res.send("NOME: Maria \n NÚMERO: (77)99999-9999")
    }
    if(req.params.id == "3"){
        res.send("NOME: Jozé \n NÚMERO: (77)99999-9999")
    }
})

app.listen(PORT, function(){console.log(`Servidor rodando na url http://localhost:${PORT}`)})