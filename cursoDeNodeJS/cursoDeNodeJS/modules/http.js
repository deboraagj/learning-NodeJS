// CRIANDO UM SERVIDOR COM MÓDULO NATIVO DO NODE.JS

const http = require("http")
const PORT = 8080

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end("<h1> home page </h1>")
    }

    if (req.url === "/users") {
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

        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(users))
    }
})

server.listen(PORT, () => console.log(`Rodando na porta ${PORT}! http://localhost:${PORT}`))