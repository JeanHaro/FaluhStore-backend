/*
    Ruta: '/api/categorias
*/

const { Router } = require('express');

// Validación de express 
const { check } = require('express-validator');

// Middlewares
const { validarCampos } = require('../middlewares/validar-campos');

// Controladores
const { getCategorias, crearCategorias } = require('../controllers/categorias');

const router = Router();

// Categorias
router.get('/', getCategorias);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategorias);

module.exports = router;