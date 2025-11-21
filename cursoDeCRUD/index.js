const express =  require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, (error) => {
    if(error){
        console.log("HOUVE ALGUM ERRO! ;(");
        return;
    }
    console.log("SERVIDOR RODANDO! :)")
});