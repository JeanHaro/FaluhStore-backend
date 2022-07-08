const { Schema, model } = require('mongoose');

// Esquema de la categoria 
const CategoriaSchema = Schema({
    nombre: {
        type: String,
        require: true
    }
})

module.exports = model('Categorias', CategoriaSchema)