function fetchCaratersWars(){
    let xhr = new XMLHttpRequest();
    let caracterID = document.getElementById('caracterId').value;
    console.log(caracterID);
    let url = `https://swapi.py4e.com/api/people/${caracterID}/`
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            DisplayGeneralInfo(response);
            DisplayExtraInfo(response);
            DisplayHomeworldInfo(response);
            DisplayFilmsInfo(response);
            DisplaySpeciesInfo(response);
            DisplayVehiclesInfo(response); 
            DisplayStarshipsInfo(response);
        }
        else if( this.readyState == 4 ){
            console.log('Error:',this.statusText);
        }
    };
    xhr.send();
}


function DisplayGeneralInfo(data){
    let generalInfo = document.getElementById("GeneralInf");
    
    if (data.response === "error") {
        generalInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } 
    else {
        generalInfo.innerHTML = `
        <p>Nombre: ${data.name}</p>
        <p>Altura: ${data.height}</p>
        <p>Masa: ${data.mass}</p>
        <p>Color de pelo: ${data.hair_color}</p>
        <p>Color de piel: ${data.skin_color}</p>
        <p>Color de ojos: ${data.eye_color}</p>
        <p>Fecha de nacimiento: ${data.birth_year}</p>
        <p>Genero: ${data.gender}</p>

        `
    };
}

function DisplayHomeworldInfo(data) {   
    let homeworldInfo = document.getElementById("HomeworldInf");

    if (data.response === "error") {
        homeworldInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        fetch(data.homeworld) 
            .then(response => response.json())
            .then(planetData => {

                homeworldInfo.innerHTML = `
                    <p>Name: ${planetData.name}</p>
                    <p>Periodo rotatorio: ${planetData.rotation_period}</p>
                    <p>Periodo Orbital: ${planetData.orbital_period}</p>
                    <p>Diametro: ${planetData.diameter}</p>
                    <p>Climate: ${planetData.climate}</p>
                    <p>Gravedad: ${planetData.gravity}</p>
                    <p>Terreno: ${planetData.terrain}</p>
                    <p>Superficie del agua: ${planetData.surface_water}</p>
                    <p>Population: ${planetData.population}</p>
                    <p>Creado: ${planetData.created}</p>
                    <p>Editado: ${planetData.edited}</p>
                    <p>Url: ${planetData.url}</p>
                `;
            })
    }
}

function DisplayFilmsInfo(data) {
    let filmInfo = document.getElementById("FilmsInf");

    if (data.response === "error") {
        filmInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        let filmsList = data.films.map(function(url) {
            return fetch(url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(filmData) {
                    return filmData.title;
                });
        });

        Promise.all(filmsList)
            .then(function(films) {
                let filmsHtml = "";
                for (let i = 0; i < films.length; i++) {
                    filmsHtml += `<p> ${films[i]} </p>`;
                }
                filmInfo.innerHTML = `${filmsHtml}`;
            })

    }
}




function DisplaySpeciesInfo(data) {
    let speciesInfo = document.getElementById("SpeciesInf");

    if (data.response === "error") {
        speciesInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        fetch(data.species) 
            .then(response => response.json())
            .then(speciesData => {

                speciesInfo.innerHTML = `
                    <p>Name: ${speciesData.name}</p>
                    <p>Clasificación: ${speciesData.classification}</p>
                    <p>Designación: ${speciesData.designation}</p>
                    <p>Altura Media: ${speciesData.average_height}</p>
                    <p>Color de piel: ${speciesData.skin_colors}</p>
                    <p>Color de pelo: ${speciesData.hair_colors}</p>
                    <p>Color de ojos: ${speciesData.eye_colors}</p>
                    <p>Promedio de vida: ${speciesData.average_lifespan}</p>
                    <p>Mundo Natal: ${speciesData.homeworld}</p>
                    <p>Lenguaje: ${speciesData.language}</p>
                    <p>Creado: ${speciesData.created}</p>
                    <p>Editado: ${speciesData.edited}</p>
                    <p>Url: ${speciesData.url}</p>
                `;
            })
    }
}

//vehicles

function DisplayVehiclesInfo(data) {
    let starshipsInfo = document.getElementById("VehiclesInf");

    if (data.response === "error") {
        starshipsInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        let starshipsList = data.starships.map(function(url) {
            return fetch(url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(starshipsData) {
                    return starshipsData.name;
                });
        });

        Promise.all(starshipsList)
            .then(function(vehicles) {
                let vehiclesHtml = "";
                for (let i = 0; i < vehicles.length; i++) {
                    vehiclesHtml += `<p> ${vehicles[i]} </p>`;
                }
                starshipsInfo.innerHTML = `${vehiclesHtml}`;
            })

    }
}


//starships


function DisplayStarshipsInfo(data) {
    let starshipsInfo = document.getElementById("StarshipsInf");

    if (data.response === "error") {
        starshipsInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        let starshipsList = data.starships.map(function(url) {
            return fetch(url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(starshipsData) {
                    return starshipsData.name;
                });
        });

        Promise.all(starshipsList)
            .then(function(starships) {
                let starshipsHtml = "";
                for (let i = 0; i < starships.length; i++) {
                    starshipsHtml += `<p> ${starships[i]} </p>`;
                }
                starshipsInfo.innerHTML = `${starshipsHtml}`;
            })

    }
}



function DisplayExtraInfo(data) {
    let extraInfo = document.getElementById('ExtraInf');
    if (data.response === "error") {
        extraInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } 
    else {
        extraInfo.innerHTML = `
        <p>Creado: ${data.created}</p>
        <p>Editado: ${data.edited}</p>
        <p>Url: ${data.url}</p>

        `
    };
}


// https://swapi.py4e.com/api/

// https://swapi.py4e.com/api/people/