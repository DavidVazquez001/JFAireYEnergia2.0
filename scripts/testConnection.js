// testConnection.js
require('dotenv').config(); // Carga las variables de entorno desde .env.local
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
console.log('Intentando conectar a MongoDB con URI:', MONGO_URI);

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch((error) => console.error('Error de conexión:', error));
