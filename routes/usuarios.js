/*
    Ruta: '/api/usuarios
*/

const { Router } = require('express');

// Controlador
const { getUsuarios, crearUsuario } = require('../controllers/usuarios');

const router = Router();

// -- Usuarios
// GET
router.get('/', getUsuarios);

// POST
router.post('/', crearUsuario);

module.exports = router;