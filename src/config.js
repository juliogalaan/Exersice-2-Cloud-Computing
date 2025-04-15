

// check database connected or not
const mongoose = require('mongoose');

// Usar las variables de entorno definidas en docker-compose.yml
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_NAME = process.env.DB_NAME || 'Login';  // Aquí cambiamos el nombre a 'Login'

const dbUri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

mongoose.connect(dbUri)
  .then(() => console.log('Conectado a la base de datos MongoDB'))
  .catch((error) => console.error('Error al conectar con MongoDB:', error));

  
const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//Collection part
const collection = new mongoose.model("users", loginSchema)

module.exports =collection;