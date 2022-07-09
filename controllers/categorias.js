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

// Crear Categoría
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

// Actualizar
const actualizarCategoria = async (request, response) => {
    try {
        response.json({
            ok: true,
            uid
        })
    } catch (error) {
        console.log(error);

        response.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
}

module.exports = {
    getCategorias,
    crearCategorias,
    actualizarCategoria
}