// Validación
const { validationResult } = require('express-validator');

// Validar cada campo
const validarCampos = (request, response, next) => {
    // Obtener los errores encontrados
    const errores = validationResult(request);

    // Si hay errores
    if (!errores.isEmpty()) {
        return response.status(400).json({
            ok: false,
            errors: errores.mapped()
        })
    }

    next();
}

module.exports = {
    validarCampos
}