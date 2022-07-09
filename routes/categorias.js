/*
    Ruta: '/api/categorias
*/

const { Router } = require('express');

// Validación de express 
const { check } = require('express-validator');

// Middlewares
const { validarCampos } = require('../middlewares/validar-campos');

// Controladores
const { 
    getCategorias, 
    crearCategorias, 
    actualizarCategoria 
} = require('../controllers/categorias');

const router = Router();

// -- Categorias
// GET
router.get('/', getCategorias);

// POST
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategorias);

// PUT
router.put('/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
], actualizarCategoria)

module.exports = router;