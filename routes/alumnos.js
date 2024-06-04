const express = require('express');
const router = express.Router();

const alumnoController = require('../controllers/alumnoController.js');

// Ruta para mostrar todos los alumnos
router.get('/', alumnoController.mostrar);

// Ruta para crear un nuevo alumno
router.post('/create', alumnoController.crear);

// Ruta para modificar un alumno
router.put('/editar/:id', alumnoController.editar);

// Ruta para eliminar un alumno
router.delete('/eliminar/:id', alumnoController.eliminar);

module.exports = router;
