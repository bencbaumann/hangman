import { dictionary } from "./modules/dictionary.js";
import { getRandomWord } from "./modules/getRandomWord.js";
import { getLettersFromWord } from "./modules/getLettersFromWord.js";
import { getUniqueLetters } from "./modules/getUniqueLetters.js";
import { getAd } from "./modules/getAd.js";
import "../css/style.css";
import { gameState } from "./modules/gameState.js";
import { nodelist2array } from "./modules/nodelist2array.js";
import { guessedLetter, letterInWord, setupCards } from "./modules/game.js";


document.addEventListener("DOMContentLoaded", function(event) {
  var game = gameState();
  // var gameState = gameState();  

  /* Nodes from SVG DOM */
  const livesDiv = document.getElementById("lives");

  /*DOM Nodes */
  const messageDiv = document.getElementById("message");
  const guessesDiv = document.getElementById("guesses");
  const adsDiv = document.getElementById("ads");
  const yesPlay = document.getElementById("yesPlay");
  const noPlay = document.getElementById("noPlay");
  yesPlay.addEventListener('click', ()=>{
    hideModel();
    console.log(game);
    game.reset();
    console.log(game);
  });
  noPlay.addEventListener('click', ()=>{
    document.write("<h1>Thanks for Playing</h1>");
  });
  
 

  const svgPaths = ["arm1", "arm2", "arm3", "arm4", "tree", "grave", "moon"];
  const svg = document.getElementById("zombies");
  const svgChildNodes = document.getElementById("zombies").childNodes;
  const svgArray = nodelist2array(svgChildNodes);

  const showLayer = node =>
    svg.getElementById(node).setAttribute("visibility", "visible");
  
  function newGame() {
    game.word = getRandomWord(dictionary());

    console.log(game.word);
    game.wordLetters = getLettersFromWord(game.word);
    game.uniqueLetters = getUniqueLetters(game.wordLetters);
    console.log("game:" + game);
    game.wordLetters.map(setupCards);
    const hideLayer = node =>
      svg.getElementById(node).setAttribute("visibility", "hidden");
    svgPaths.map(hideLayer);
    messageDiv.innerHTML = "Please guess a letter";
    hideLayer("win");
    hideLayer("lose");
    // hideModel();
    console.log(game);
  }

  newGame();

  function hideModel() {
    document
      .getElementById("model-outer")
      .setAttribute("style", "visibility: hidden");
    document
      .getElementById("model")
      .setAttribute("style", "visibility: hidden");
  }
  function showModel() {
    document
      .getElementById("model-outer")
      .setAttribute("style", "visibility: visible");
    document
      .getElementById("model")
      .setAttribute("style", "visibility: visible");
  }

  //   ads.innerHTML = livesDiv.innerHTML = gameState.lives;

  document.onkeyup = function(event) {
    const currentLetter = event.key;
    if (game.lives > 0) {
      console.log(game.wordLetters.length);

      if (guessedLetter(currentLetter, game)) {
        messageDiv.innerHTML = "That was a guessed letter";
      } else {
        if (letterInWord(currentLetter, game.wordLetters)) {
          messageDiv.classList = "success";
          messageDiv.innerHTML = "nailed it";
          //   Maybe delete
          game.uniqueLetters = game.uniqueLetters.filter(letter => letter !== currentLetter);
          if (game.uniqueLetters.length === 0) {
            messageDiv.classList = "success";
            messageDiv.innerHTML = "You Win";
            showLayer("win");
            showModel();
          }
        } else {
          messageDiv.classList = "error";
          game.lives--;
          livesDiv.textContent = game.lives;
          showLayer(svgPaths.pop());
          messageDiv.innerHTML = "close miss!";
        }
        game.guesses.push(currentLetter);
        guessesDiv.innerHTML = game.guesses
          .map(guess => ` ${guess} `)
          .reduce((x, y) => x + y);
      }
      if (game.lives <= 0) {
        messageDiv.classList = "error";
        messageDiv.innerHTML = "You're Dead!!!";
        showLayer("lose");
        showModel();
      }
      console.log(game);
    }
  };
});
