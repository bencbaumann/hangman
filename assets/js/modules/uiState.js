/* Dependancies */
import { hideLayer } from "./hideLayer.js";
import { showLayer } from "./showLayer.js";
import { guessedLetter, letterInWord} from "./game.js";

/* Nodes from SVG DOM */
const svg = document.getElementById("zombies");
const livesDiv = document.getElementById("lives");

/* Nodes from HTML DOM */
const messageDiv = document.getElementById("message");
const guessesDiv = document.getElementById("guesses");
const winsDiv = document.getElementById("wins");
const adsDiv = document.getElementById("ads");
const debugDiv = document.getElementById("debug");
const yesPlay = document.getElementById("yesPlay");
const noPlay = document.getElementById("noPlay");


export function uiState(game){
  return {
    /* HTML DOM */
    "messageDiv": messageDiv,
    "guessesDiv": guessesDiv,
    "adsDiv": adsDiv,
    "debugDiv": debugDiv,
    "yesPlay": yesPlay,
    "noPlay": noPlay,
    "word": word,
    "winsDiv": winsDiv,
    /* SVG DOM */
    "svgPaths" : ["arm1", "arm2", "arm3", "arm4", "tree", "grave", "moon"],
    "livesDiv": livesDiv,
    "svg": svg,
    "startGame": function(){
        // hides all the svgPaths that get exposed on wrong guesses
        game.reset();
        console.log(game);
        this.messageDiv.innerHTML = "Please guess a letter";
        this.hideLayer("win");
        this.hideLayer("lose");
        this.hideModel();
        this.clearCards();
        this.clearGuessesDiv();
        game.wordLetters.map(this.setupCards);
        this.resetSvg();
    },
    "hideModel": function(){
        document
        .getElementById("model-outer")
        .setAttribute("style", "visibility: hidden");
        document
        .getElementById("model")
        .setAttribute("style", "visibility: hidden");
    },
    "showModel": function(){
        document
        .getElementById("model-outer")
        .setAttribute("style", "visibility: visible");
        document
        .getElementById("model")
        .setAttribute("style", "visibility: visible");
    },
    "hideLayer": function(node){
        hideLayer(node);
    },
    "showLayer": function(node){
        showLayer(node);
    },
    "clearCards": function(){
        const word = document.getElementById("word");
        word.innerHTML="";
    },
    "setupCards": function (letter) {
        const word = document.getElementById("word");
        var divLetter = document.createElement("div");
        divLetter.classList = `letter letter${letter}`;
        divLetter.innerHTML = letter;
        word.appendChild(divLetter);
    },
    "clearGuessesDiv": function(){
        guessesDiv.innerHTML ="";
    },
    "resetSvg": function(){
        livesDiv.textContent = game.lives;
        this.svgPaths = ["arm1", "arm2", "arm3", "arm4", "tree", "grave", "moon"];
        this.svgPaths.map(hideLayer);
    },
    "msg": function(message, msgClass){
        if(msgClass){
            this.messageDiv.classList = msgClass;
        }
        this.messageDiv.innerHTML = message;
    },
    "debug": function(){
        this.debugDiv.innerHTML = `<pre>${JSON.stringify(game, null, 2)}</pre>`;
    },
    "setWins": function(){
        this.winsDiv.innerHTML = `Wins: ${game.wins} | Losses: ${game.losses}`;
    }    
  }
}

