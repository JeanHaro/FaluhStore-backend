// Modelos
const Categorias = require('../models/categorias');

const getCategorias = (request, response) => {
    response.json({
        ok: true,
        msg: 'Obtener Categorias'
    })
}

const crearCategorias = async (request, response) => {
    // console.log(request.body); // { nombre: 'Sandalias' }

    const { nombre } = request.body;

    // Instanciando el modelo
    const categoria = new Categorias(request.body);

    // Grabar en la base de datos
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