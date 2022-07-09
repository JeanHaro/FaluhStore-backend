/*
    Ruta: '/api/usuarios
*/

const { Router } = require('express');

// Validación
const { check } = require('express-validator');

// Middlewares
const { validarCampos } = require('../middlewares/validar-campos');

// Controlador
const { getUsuarios, crearUsuario } = require('../controllers/usuarios');

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

module.exports = router;