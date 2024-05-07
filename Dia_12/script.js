function Iniciar() {
    
    var formElement = document.getElementById('frmDataHero');

    var inputElements = formElement.querySelectorAll('input, select');

    inputElements.forEach(function(element) {
        element.disabled = false;
    });

    document.getElementById('grpSuites').style.display = 'block'; 
}

function Cancelar() {
    var formElement = document.getElementById('frmDataHero');

    var inputElements = formElement.querySelectorAll('input, select');

    inputElements.forEach(function(element) {
        element.disabled = true;
    });

    document.getElementById('grpSuites').style.display = 'none';
}


// Arreglo para almacenar los héroes
var heroes = [];

// Función para guardar un nuevo héroe
function guardarHeroe() {
    var characterName = document.getElementById('characterName').value;
    var actorName = document.getElementById('actorName').value;
    var age = document.getElementById('age').value;
    var cityName = document.getElementById('cityName').value;
    var poster = document.getElementById('poster').value;
    var dateAppears = document.getElementById('dateAppears').value;
    var producer = document.getElementById('producer').value;

    var heroe = {
        characterName: characterName,
        actorName: actorName,
        age: age,
        cityName: cityName,
        poster: poster,
        dateAppears: dateAppears,
        producer: producer
    };

    heroes.push(heroe);
    
    // Puedes guardar los datos en localStorage para persistencia
    localStorage.setItem('heroes', JSON.stringify(heroes));
}

// Función para mostrar los héroes guardados
function mostrarHeroes() {
    // Recuperar los héroes del localStorage
    var storedHeroes = localStorage.getItem('heroes');
    if (storedHeroes) {
        heroes = JSON.parse(storedHeroes);
        // Mostrar los héroes en la interfaz de usuario (por ejemplo, en una tabla)
        // Aquí debes implementar cómo deseas mostrar los héroes en tu interfaz
    }
}

// Función para eliminar un héroe
function eliminarHeroe(index) {
    heroes.splice(index, 1);
    localStorage.setItem('heroes', JSON.stringify(heroes));
}

// Llamar a la función mostrarHeroes al cargar la página para mostrar los héroes guardados
mostrarHeroes();
