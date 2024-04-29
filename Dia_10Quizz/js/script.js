let currentPokemonId = 0; 

function fetchCaratersPokemon() {
    let caracterID = document.getElementById('caracterId').value;
    let url = `https://pokeapi.co/api/v2/pokemon/${caracterID}`;
    fetchPokemon(url);
}

function fetchPokemon(url) {
    fetch(url) // <-- Hace la respectiva busqueda
        .then(response => response.json()) // <-- si la encuentra lo convierte en json y luego la pasa a mostrar
        .then(data => {
            displayPokemon(data); // ACAAAAAAA
            currentPokemonId = data.id; 
        })
        .catch(error => console.error('Error:', error));
}

function displayPokemon(data) {
    document.getElementById('nameid').innerHTML = `<p id="id" style="color: #a2a2a3">${data.id}</p><p id="name">${data.name.toUpperCase()}</p>`;
    document.getElementById('gif').innerHTML = `<img style="width: 10vw; height: 15vh;" src="${data.sprites.other.showdown.front_default}" alt="xd">`;
}


function fetchCaratersPreview() {
    if (currentPokemonId > 1) {
        let prevPokemonId = currentPokemonId - 1;
        let url = `https://pokeapi.co/api/v2/pokemon/${prevPokemonId}`;
        fetchPokemon(url);
    } else {
        console.log("No hay Pokémon anterior disponible.");
    }
}

function fetchCaratersNext() {
    let nextPokemonId = currentPokemonId + 1;
    let url = `https://pokeapi.co/api/v2/pokemon/${nextPokemonId}`;
    fetchPokemon(url);
}


document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37) { // Flecha izquierda
      event.preventDefault();
      document.getElementById("preview").click();
    } else if (event.keyCode === 39) { // Flecha derecha
      event.preventDefault();
      document.getElementById("next").click();
    }
  });
  

