const express = require("express");
const cors = require('cors');
const routes = require("./routes");
/* Tipos de parâmetros:

    - Query: Parâmetros nomeados enviados na rota após o símbolo "?" (paginação, filtros)
        Recebido na variável request.query
        localhost:3333/users?name=Neto
    - Route: Parâmetros utilizados para filtrar recursos únicos;
        Recebido na variável request.params
        localhost:3333/users/1
    - Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
        Recebido na variável request.body
        localhost:3333/users -> POST -> descrever body como json -> definir json enviado 
*/
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);