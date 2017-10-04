import { getRandomWord } from "./modules/getRandomWord.js";
import { getAd } from "./modules/getAd.js";
import { getLettersFromWord } from "./modules/getLettersFromWord.js";
import { dictionary } from "./modules/dictionary.js";
import "../css/style.css";
import { game } from "./modules/gameState.js";
import { nodelist2array } from "./modules/nodelist2array.js";
import { game } from "./modules/game.js";
import { guessedLetter, letterInWord, setupCards } from "./modules/game1.js";
import { getUniqueLetters } from "./modules/getUniqueLetters.js";

document.addEventListener("DOMContentLoaded", function(event) {
  var gameState = game();
  /* Nodes from SVG DOM */
  const livesDiv = document.getElementById("lives");

  /*DOM Nodes */
  const messageDiv = document.getElementById("message");
  const guessesDiv = document.getElementById("guesses");
  const adsDiv = document.getElementById("ads");
  const svgPaths = ["arm1", "arm2", "arm3", "arm4", "tree", "grave", "moon"];
  const svg = document.getElementById("zombies");
  const svgChildNodes = document.getElementById("zombies").childNodes;
  const svgArray = nodelist2array(svgChildNodes);

  const showLayer = node =>
    svg.getElementById(node).setAttribute("visibility", "visible");

  newGame();
  function newGame() {
    gameState.word = getRandomWord(dictionary());
    gameState.wordLetters = getLettersFromWord(gameState.word);
    gameState.uniqueLetters = getUniqueLetters(gameState.wordLetters);
    console.log("gameState:" + gameState);
    gameState.wordLetters.map(setupCards);
    const hideLayer = node =>
      svg.getElementById(node).setAttribute("visibility", "hidden");
    svgPaths.map(hideLayer);
    messageDiv.innerHTML = "Please guess a letter";
    hideLayer("win");
    hideLayer("lose");
    hideModel();
  }

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
    if (gameState.lives > 0) {
      console.log(gameState.wordLetters.length);

      if (guessedLetter(gameState)) {
        messageDiv.innerHTML = "That was a guessed letter";
      } else {
        if (letterInWord(event.key, gameState.wordLetters)) {
          messageDiv.classList = "success";
          messageDiv.innerHTML = "nailed it";
          //   Maybe delete
          gameState.uniqueLetters = gameState.uniqueLetters.filter(
            letter => letter !== event.key
          );
          if (gameState.uniqueLetters.length === 0) {
            messageDiv.classList = "success";
            messageDiv.innerHTML = "You Win";
            showLayer("win");
            showModel();
          }
        } else {
          messageDiv.classList = "error";
          gameState.lives--;
          livesDiv.textContent = gameState.lives;
          showLayer(svgPaths.pop());
          messageDiv.innerHTML = "close miss!";
        }
        gameState.guesses.push(event.key);
        guessesDiv.innerHTML = gameState.guesses
          .map(guess => ` ${guess} `)
          .reduce((x, y) => x + y);
      }
      if (gameState.lives <= 0) {
        messageDiv.classList = "error";
        messageDiv.innerHTML = "You're Dead!!!";
        showLayer("lose");
        showModel();
      }
      console.log(gameState);
    }
  };
});
