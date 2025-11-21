const express = require("express")

const app = express()

// ROTA PARA O HOME
app.get("/home", (req, res) => {
    res.contentType("aplication/html") // PARA O NAVEGADOR ENTENDER COMO HTML
    res.status(200).send("<h1>Heloo World!</h1>")
})

// ROTA PARA USUÁRIOS
app.get("/users", (req, res) => {
     const users = [
            {
                name: "Débora Aragão",
                email: "debora@love.com"
            },
            {
                name: "Jeferson Mendes",
                email: "jeferson@love.com"
            }
    ];
    res.status(200).json(users)
})

const PORT = 8080;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}, http://localhost:${PORT}`))

