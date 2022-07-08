const { Schema, model } = require('mongoose');

// Esquema de la categoria 
const CategoriaSchema = Schema({
    nombre: {
        type: String,
        require: true
    }
})

// Sobrescribimos el método
CategoriaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    // Añadimos el id al object
    object.uid = _id;

    return object;
})

module.exports = model('Categorias', CategoriaSchema)