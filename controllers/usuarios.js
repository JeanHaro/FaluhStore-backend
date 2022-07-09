// bcrypt
const bcrypt = require('bcryptjs');

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

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync(); // numero de manera aleatoria
        usuario.password = bcrypt.hashSync(password, salt);

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

// Actualizar usuario
const actualizarUsuario = async (request, response) => {
    // Obtenemos el id
    const uid = request.params.id;

    try {
        // Buscar el usuario por el id
        const usuarioDB = await Usuario.findById(uid);

        // Si no encuentra al usuario
        if (!usuarioDB) {
            return response.status(404).json({
                ok: false,
                msg: 'No existe un usuario por ese id'
            })
        }

        // password, google no se va a actualizar
        const { password, google, email, ...campos }= request.body;

        // Si el email es el mismo
        if (usuarioDB.email !== email) {
            const existeEmail = await Usuario.findOne({
                email: request.body.email
            })

            // Si ya existe el email
            if (existeEmail) {
                return response.status(400).json({
                    ok: false,
                    msg: "Ya existe un usuario con ese email"
                })
            }
        }

        campos.email = email;

        const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, { new: true });

        response.json({
            ok: true,
            usuario: usuarioActualizado
        })
    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
}

// Eliminar usuario
const borrarUsuario = async (request, response) => {
    const uid = request.params.id;

    try {
        // Buscar el usuario por el id
        const usuarioDB = await Usuario.findById(uid);

        // Si no encuentra al usuario
        if (!usuarioDB) {
            return response.status(404).json({
                ok: false,
                msg: 'No existe un usuario por ese id'
            })
        }

        await Usuario.findByIdAndDelete(uid);

        response.json({
            ok: true,
            msg: 'Usuario eliminado'
        })
    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}