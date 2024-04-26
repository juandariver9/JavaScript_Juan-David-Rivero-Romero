function fetchCaratersPokemon(){
    let xhr = new XMLHttpRequest();
    let caracterID = document.getElementById('caracterId').value;
    console.log(caracterID);
    let url = `https://pokeapi.co/api/v2/pokemon/${caracterID}`
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response.name);
            console.log(response.order);
            console.log(response.sprites.other.showdown.front_default);
        }
        else if( this.readyState == 4 ){
            console.log('Error:',this.statusText);
        }
    };
    xhr.send();
}

function fetchCaratersPreview(){
    let xhr = new XMLHttpRequest();
    let caracterID = document.getElementById('caracterId').value;
    console.log(caracterID);
    let url = `https://pokeapi.co/api/v2/pokemon/${caracterID}`
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response.name);
        }
        else if( this.readyState == 4 ){
            console.log('Error:',this.statusText);
        }
    };
    xhr.send();
}