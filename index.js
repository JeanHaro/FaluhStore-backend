// Express
const express = require('express');

// Variable de entorno
require('dotenv').config();

// cors
const cors = require('cors');

// BD
const { dbConnection } = require('./database/config');

// Inciar la app express
const app = express();

app.use(cors());

// Conectar a la BD
dbConnection();

// console.log(process.env)

// Rutas
app.use('/api/categorias', require('./routes/categorias'));

// Establecemos la conexión al servidor
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + 3000);
})