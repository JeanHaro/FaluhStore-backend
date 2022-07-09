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

    try {
        const existeEmail = await Usuario.findOne({ email });

        // Si ya existe el email
        if (existeEmail) {
            return response.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado'
            })
        }

        // Instanciando el modelo
        const usuario = new Usuario(request.body);

        // Guardamos en la Base de datos
        await usuario.save();

        response.json({
            ok: true,
            usuario
        })
    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: 'Error inesperado...'
        })
    }
}

module.exports = {
    getUsuarios,
    crearUsuario
}