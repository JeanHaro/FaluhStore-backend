/*
    Ruta: '/api/usuarios
*/

const { Router } = require('express');

// Validación
const { check } = require('express-validator');

// Middlewares
const { validarCampos } = require('../middlewares/validar-campos');

// Controlador
const { 
    getUsuarios, 
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
} = require('../controllers/usuarios');

const router = Router();

// -- Usuarios
// GET
router.get('/', getUsuarios);

// POST
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').not().isEmpty(),
    validarCampos
], crearUsuario);

// PUT
router.put('/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('role', 'El role es obligatorio').not().isEmpty()
], actualizarUsuario)

// DELETE
router.delete('/:id', borrarUsuario);

module.exports = router;