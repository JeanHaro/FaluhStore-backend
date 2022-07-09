// Modelo
const Usuario = require('../models/usuario');

// Obtener Usuarios
const getUsuarios = async (request, response) => {
    // Obtener todos los usuarios
    const usuarios = await Usuario.find({}, 'nombre apellido email dni telefono telefono2 direccion genero role google');

    response.json({
        ok: true,
        usuarios
    })
}

// Crear Usuario
const crearUsuario = async (request, response) => {
    // console.log(request.body);

    // Valores
    const { nombre, apellido, email, password } = request.body;

    // Instanciando el modelo
    const usuario = new Usuario(request.body);

    // Guardamos en la Base de datos
    await usuario.save();

    response.json({
        ok: true,
        usuario
    })
}

module.exports = {
    getUsuarios,
    crearUsuario
}