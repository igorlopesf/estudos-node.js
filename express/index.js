const express = require("express"); //Importando o Express
const app = express(); //Iniciando o express 

//Definindo rota inicial e resposta 
app.get("/",function(req,res){
    res.send("Resposta enviada")
});  

app.get("/blog", function(req,res){
    res.send("Bem-vindo ao blog!");
});

app.get("/canal/youtube", function(req,res){
    res.send("Bem-vindo ao canal");
});


app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})
