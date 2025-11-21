let http = require('http');

//"createServer é um método que existe na biblioteca http"

http.createServer((req, res) =>{
    res.end("Olá, mundo!");
}).listen(8084);

console.log('running server');