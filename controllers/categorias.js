const getCategorias = (request, response) => {
    response.status(400).json({
        ok: true,
        categorias: []
    })
}

module.exports = {
    getCategorias
}