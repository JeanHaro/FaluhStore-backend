const mongoose = require('mongoose');

require('dotenv').config();

// Establecemos la conexión
const dbConnection = async () => {
    try {
        // Conectar a la BD
        await mongoose.connect(process.env.DB_CONNECT);

        console.log('DB Online');
    } catch (error) {
        console.log(error);
        
        throw new Error('Error a la hora de iniciar la BD');
    }
}

module.exports = {
    dbConnection
}