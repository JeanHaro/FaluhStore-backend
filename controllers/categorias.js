// Modelos
const Categorias = require('../models/categorias');

// Resultados de la validación
const { validationResult } = require('express-validator');

const getCategorias = async (request, response) => {
    // Obtener todas las categorias
    const categorias = await Categorias.find();
    
    response.json({
        ok: true,
        categorias
    })
}

const crearCategorias = async (request, response) => {
    // console.log(request.body); // { nombre: 'Sandalias' }

    const { nombre } = request.body;

    // Verificando si hay errores
    const errores = validationResult(request);

    // Si hay errores
    if (!errores.isEmpty()) {
        return response.status(400).json({
            ok: false,
            errors: errores.mapped()
        })
    }

    // Instanciando el modelo
    const categoria = new Categorias(request.body);

    // Guardamos en la base de datos
    await categoria.save();

    response.json({
        ok: true,
        categoria
    })
}

module.exports = {
    getCategorias,
    crearCategorias
}