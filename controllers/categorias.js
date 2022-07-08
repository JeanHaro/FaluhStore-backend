// Modelos
const Categorias = require('../models/categorias');

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