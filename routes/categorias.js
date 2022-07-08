/*
    Ruta: '/api/categorias
*/

const { Router } = require('express');

// Controladores
const { getCategorias, crearCategorias } = require('../controllers/categorias');

const router = Router();

// Categorias
router.get('/', getCategorias);
router.post('/', crearCategorias);

module.exports = router;