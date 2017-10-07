/* Dependancies */
import { hideLayer } from "./hideLayer.js";
import { showLayer } from "./showLayer.js";
import { getRandomWord } from "./getRandomWord.js";

export function uiState(game){
  return {
    "successMessages": ["Nailed it! Good Job!", "That'll Work!", "Awesome, Good Show!"],
    "errorMessages": ["Close Miss!", "Learn to guess already!", "Poor Form Old Chap!"],
    /* HTML DOM */
    "messageDiv": document.getElementById("message"),
    "guessesDiv": document.getElementById("guesses"),
    "adsDiv": document.getElementById("ads"),
    "debugDiv": document.getElementById("debug"),
    "yesPlay": document.getElementById("yesPlay"),
    "noPlay": document.getElementById("noPlay"),
    "word": word,
    "winsDiv": document.getElementById("wins"),
    "lossesDiv": document.getElementById("losses"),
    /* SVG DOM */
    "svgPaths" : ["arm1", "arm2", "arm3", "arm4", "tree", "grave", "moon"],
    "livesDiv": document.getElementById("lives"),
    "svg": document.getElementById("zombies"),
    /* Sounds */
    "sndSuccess": new Audio('./assets/sounds/success.mp3'),
    "sndScary": new Audio('./assets/sounds/scary.mp3'),
    "sndWin": new Audio('./assets/sounds/win.mp3'),
    "sndLose": new Audio('./assets/sounds/lose.mp3'),
    "sndZombie": new Audio('./assets/sounds/zombie.mp3'),
    "startGame": function(){
        // hides all the svgPaths that get exposed on wrong guesses
        game.reset();
        if(game.debug){this.debugDiv.innerHTML = `<pre>${JSON.stringify(game, null, 2)}</pre>`};
        console.log(game);
        this.msg("Please Guess a letter", "success");
        // this.messageDiv.innerHTML = "Please guess a letter";
        this.hideLayer("win");
        this.hideLayer("lose");
        this.hideModel();
        this.clearCards();
        this.clearGuessesDiv();
        game.wordLetters.map(this.setupCards);
        this.resetSvg();
    },
    "showGuess": function(letter){
        let div = document.createElement('div');
        div.innerHTML=letter;
        document.body.appendChild(div);
        div.classList="guess";
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
        divLetter.classList = `letter`;
        divLetter.classList = `letter underline letter${letter}`;
        divLetter.innerHTML = letter;
        word.appendChild(divLetter);
    },
    "clearGuessesDiv": function(){
        this.guessesDiv.innerHTML ="";
    },
    "resetSvg": function(){
        this.livesDiv.textContent = game.lives;
        this.svgPaths = ["arm1", "arm2", "arm3", "arm4", "tree", "grave", "moon"];
        this.svgPaths.map(hideLayer);
    },
    "msg": function(message, msgClass){
        if(msgClass){
            this.messageDiv.classList = msgClass;
        }
        this.messageDiv.innerHTML = message;
    },
    "getRandomWord": function(arr){
        return getRandomWord(arr);
    },
    "debug": function(){
        if(game.debug){this.debugDiv.innerHTML = `<pre>${JSON.stringify(game, null, 2)}</pre>`};
    },
    "setWins": function(){
        this.winsDiv.innerHTML = game.wins;
        this.lossesDiv.innerHTML = game.losses;
    },
    "playSuccess": function(){
        // this.sndSuccess.play();
        this.sndSuccess.load();
        this.sndSuccess.play();
    },
    "playError": function(){
        this.sndScary.load();
        this.sndScary.play();
    },
    "playWin": function(){
        this.sndWin.load();
        this.sndWin.play();
    },
    "playLose": function(){
        this.sndLose.load();
        this.sndLose.play();
    },
    "playZombie": function(){
        this.sndZombie.load();
        this.sndZombie.play();
    }
  }
}

