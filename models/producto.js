const { Schema, model } = require('mongoose');

// Estructura del Producto
const ProductoSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    talla: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    img: {
        type: String
    },
    color: {
        type: String,
        require: require
    },
    genero: {
        type: String,
        require: require
    }
})