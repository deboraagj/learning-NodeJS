let http = require('http');


http.createServer((req, res) => {
    res.end("Olá Mundo!");
}).listen(8080);

console.log("Servidor rodando");
