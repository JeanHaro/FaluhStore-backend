const { Schema, Model } = require('mongoose');

// Estructura del Usuario
const UsuarioSchema = Schema({
    nombre: {
        type: String,
        require: true,
    },
    apellido: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    dni: {
        type: Number,
        unique: true
    },
    telefono: {
        type: Number
    },
    telefono2: {
        type: Number
    },
    direccion: {
        type: String
    },
    genero: {
        type: String
    },
    img: {
        type: String
    },
    role: {
        type: String,
        require: true,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    }
})
