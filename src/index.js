//execução do servidor
const express = require("express");

const server = express();

app.use(express.json());

server.listen(3306, () => console.log("Servidor rodando na porta 3306"));