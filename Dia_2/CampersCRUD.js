const fs = require('fs');

function MainCamperAñadir() {
    const datos = fs.readFileSync('inscritos.json', 'utf8');
    const mijson = JSON.parse(datos);
    
    function mainCamper() {
        const estado = "Inscrito";
        const nuevo_id = Math.max(...mijson.datos.inscripciones.map(inscripcion => inscripcion.id), 0) + 1;
        
        const nuevaInscripcion = {
            id: nuevo_id,
            Identificacion: parseInt(prompt("Escriba el número de identificación: ")),
            Nombre: prompt("Escriba el nombre: "),
            Apellido1: prompt("Escriba el apellido 1: "),
            Apellido2: prompt("Escriba el apellido 2: "),
            Direccion: prompt("Escriba la dirección: "),
            Acudiente: prompt("Escriba el nombre de su acudiente (opcional): "),
            Celular: parseInt(prompt("Escriba el número de celular: ")),
            Telefono: parseInt(prompt("Escriba el número de teléfono: ")),
            Estado: estado
        };

        mijson.datos.inscripciones.push(nuevaInscripcion);
        
        fs.writeFileSync('inscritos.json', JSON.stringify(mijson, null, 2), 'utf8');
    }
    
    mainCamper();
}

module.exports = {
    MainCamperAñadir: MainCamperAñadir
};
