const Alumno = require('../models/Alumno.js'); 

module.exports.mostrar = (req, res) => {
    Alumno.find({})
        .then(alumnos => {
            console.log(alumnos); 
            res.render('index',{alumnos:alumnos});
        })
        .catch(error => {
            console.error(error); 
            res.status(500).json({
                message: 'Error al mostrar alumnos'
            });
        });
};


module.exports.crear = async (req, res) => {
    try {
        // Obtener los datos del cuerpo de la solicitud
        const { nombre, edad } = req.body;

        // Crear una nueva instancia del modelo Alumno
        const nuevoAlumno = new Alumno({ nombre, edad });

        // Guardar el nuevo alumno en la base de datos
        await nuevoAlumno.save();

        // Responder con un mensaje de éxito
        res.status(201).json({ message: 'Alumno creado exitosamente', alumno: nuevoAlumno });
    } catch (error) {
        // Manejar cualquier error y responder con un mensaje de error
        console.error(error);
        res.status(500).json({ message: 'Error al crear alumno' });
    }
};

// Modificar alumno
module.exports.editar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, edad } = req.body;
        
        const alumnoActualizado = await Alumno.findByIdAndUpdate(id, { nombre, edad }, { new: true });
        
        res.status(200).json({ message: 'Alumno modificado exitosamente', alumno: alumnoActualizado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al modificar alumno' });
    }
};


// Eliminar alumno
module.exports.eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        
        await Alumno.findByIdAndDelete(id);
        
        res.status(200).json({ message: 'Alumno eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar alumno' });
    }
};
