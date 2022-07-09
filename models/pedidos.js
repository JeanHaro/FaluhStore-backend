const { Schema, Model } = require('mongoose');

// Estructura del pedido
const PedidoSchema = Schema({
    fecha: {
        type: Date,
        require: true
    },
    delivery: {
        type: Boolean,
        require: true,
        default: false
    },
    estado: {
        type: String,
        require: true,
        default: 'En Proceso'
    },
    monto: {
        type: Number,
        require: true
    },
    cantidad: {
        type: Number,
        require: true
    }
})

module.exports = model('Pedido', PedidoSchema)