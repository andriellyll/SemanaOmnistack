const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://andriellylucena:drica2303@cluster0-jkume.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); // entender requisições com o corpo no formato json
app.use(routes); 

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:

// Query Params: request.query (Filtros, ordenação, paginação ...)
// Rote Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para a criação ou alteração de um registro)

// MongoDB (não-relacional)

app.listen(3333);