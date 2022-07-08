const { Schema, model } = require('mongoose');

// Esquema de la marca
const MarcaSchema = Schema({
    nombre: {
        type: String,
        require: true
    }
})