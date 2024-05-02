let deckId;
let zIndexCounter = 0; 
let remainingCards = 52; 
let correctPredictions = 0; // Contador de predicciones correctas

function startGame() { // <-- Se prepara pa iniciar
    document.getElementById('startButton').style.display = 'none'; 
    document.getElementById('revealButton').style.display = 'block'; 
    document.getElementById('retryButton').style.display = 'none'; 
    document.getElementById('blackButton').style.display = 'block';
    document.getElementById('redButton').style.display = 'block'; 
    document.getElementById('prediction').style.display = 'block'; 
    document.getElementById('cardContainer').innerHTML = ''; 
    document.getElementById('cantPredict').innerText = correctPredictions;
    fetchDeckId();
}

function predict(color) {
    let predictionElement = document.getElementById('prediction');
    if (color === "BLACK") {
        predictionElement.innerText = "BLACK";
        console.log("Predicción: Negra");
    } else if (color === "RED") {
        predictionElement.innerText = "RED";
        console.log("Predicción: Roja");
    }
}


function fetchDeckId() {
    let xhr = new XMLHttpRequest();
    let url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let response = JSON.parse(this.responseText);
                deckId = response.deck_id;
                console.log(deckId);
            } else {
                console.error('Error:', this.statusText);
            }
        }
    };
    xhr.send();
}

function fetchCardFromDeck() {
    let xhr = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let response = JSON.parse(this.responseText);
                let cardSuit = response.cards[0].suit;
                let color = (cardSuit === "DIAMONDS" || cardSuit === "HEARTS") ? "RED" : "BLACK";
                let prediction = document.getElementById('prediction').innerText; // Obtenemos la predicción actual
                console.log("Prediction:", prediction);
                console.log("Color:", color);
                if (prediction === color) {
                    console.log("Predicción correcta. El juego continúa.");
                    correctPredictions++; // Incrementar contador de predicciones correctas
                    document.getElementById('cantPredict').innerText ="Aciertos: " + correctPredictions; // Actualizar contador
                } else {
                    console.log("Predicción incorrecta. El juego ha terminado.");
                    endGame(); // Finalizar el juego si la predicción es incorrecta
                }
                let cardImageUrl = response.cards[0].image;
                displayCard(cardImageUrl);
                remainingCards--;
                if (remainingCards === 0) {
                    endGame();
                }
            } else {
                console.error('Error:', this.statusText);
            }
        }
    };
    xhr.send();
}


function displayCard(imageUrl) {
    let cardImage = document.createElement('img');
    cardImage.src = imageUrl;
    cardImage.classList.add('card-image'); // Agregar la clase card-image
    cardImage.style.zIndex = zIndexCounter++;
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.appendChild(cardImage);
}

function endGame() {
    document.getElementById('revealButton').style.display = 'none'; 
    document.getElementById('retryButton').style.display = 'block';
}

function retryGame() {
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('retryButton').style.display = 'none'; 
    document.getElementById('blackButton').style.display = 'none';
    document.getElementById('redButton').style.display = 'none'; 
    document.getElementById('prediction').style.display = 'none'; 
    document.getElementById('cardContainer').innerHTML = ''; 
    document.getElementById('cantPredict').innerText = correctPredictions = 0; // Reiniciar contador
    remainingCards = 52; 
}

