// Express
const express = require('express');

// Variable de entorno
require('dotenv').config();

const cors = require('cors');

const { dbConnection } = require('./database/config');

const app = express();

app.use(cors());

// Conectar a la BD
dbConnection();

// console.log(process.env)

// Rutas
app.get('/', (request, response) => {
    response.status(400).json({
        ok: true,
        msg: 'Hola mundo'
    })
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + 3000);
})