const mongoose = require('mongoose');

// URL de conexión de MongoDB Atlas
const url = 'mongodb+srv://cesar0in16:rancher15@cluster0.ufdyvoo.mongodb.net/db_alumnos?retryWrites=true&w=majority';




mongoose.connect(url);


const db = mongoose.connection;

// Manejo de eventos de conexión
db.on('error', console.error.bind(console, "Error al conectar mongodb"));
db.once('open', function() {
    console.log("¡Conectado a MongoDB!");
});

module.exports = db;
