const path = require("path")

// apenas o nome do arquivo atual
console.log(path.basename(__filename));

// apenas o nome do diretório atual
console.log(path.dirname(__filename));

// nome da extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename))

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test"))