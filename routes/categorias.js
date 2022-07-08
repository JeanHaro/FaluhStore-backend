/*
    Ruta: '/api/categorias
*/

const { Router } = require('express');

// Controladores
const { getCategorias } = require('../controllers/categorias');

const router = Router();

// Categorias
router.get('/', getCategorias);

module.exports = router;