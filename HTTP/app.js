var http = require("http");

http.createServer(function (requisicao,resposta){
    resposta.end("<h1>Bem-Vindo!</h1><h4>Teste de servidor HTTP</h4>");
}).listen(8080);
console.log("Meu servidor HTTP está rodando!") 