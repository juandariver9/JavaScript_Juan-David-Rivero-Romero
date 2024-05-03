// MI API
// https://6634d4219bb0df2359a2e1c3.mockapi.io/SuperHero/${caracterID}
//------------------------------------------------------------------------------

function BuscarEnElLink(){
    let xhr = new XMLHttpRequest();
    let caracterID = document.getElementById('caracterId').value;
    console.log(caracterID);
    let url = `https://6634d4219bb0df2359a2e1c3.mockapi.io/SuperHero/${caracterID}`
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            DisplayGeneralInfo(response);
        }
        else if( this.readyState == 4 ){
            console.log('Error:',this.statusText);
        }
    };
    xhr.send();
}



function DisplayGeneralInfo(data){
    let allInf = document.getElementById("inf");
    
    if (data.response === "error") {
        allInf.innerHTML = `<p>Error: ${data.error}</p>`;
    } 
    else {
        document.getElementById('deleteButton').style.display = 'block'; 
        document.getElementById('updateButton').style.display = 'block'; 
        allInf.innerHTML = `
        <hr>
        <p>Nombre Personaje: ${data.CharacterName}</p>
        <p>Nombre Actor: ${data.ActorName}</p>
        <p>Edad : ${data.ActorAge}</p>
        <p>Ubication: ${data.Ubication}</p>
        <p>Poster: ${data.Poster}</p>
        <p>Ubication: ${data.Date}</p>
        <p>Productora: ${data.Producer}</p>
        <p>Trajes: ${data.CharacterName}</p>
        `
    }
}

function displayInfoHero() {
    document.getElementById('infHero').style.display = 'block'; 
    document.getElementById('delHero').style.display = 'none'; 
    
}

function displayDelHero() {
    document.getElementById('infHero').style.display = 'none'; 
    document.getElementById('delHero').style.display = 'block'; 
}