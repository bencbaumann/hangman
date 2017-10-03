import { getRandomWord } from "./modules/getRandomWord.js";
import { getLettersFromWord } from "./modules/getLettersFromWord.js";
import { dictionary } from "./modules/dictionary.js";
import "../css/style.css";
var player = require("./modules/player.json");
import { nodelist2array } from "./modules/nodelist2array.js";
import { game } from "./modules/game.js";
import { guessedLetter, letterInWord, setupCards } from "./modules/game1.js";

document.addEventListener("DOMContentLoaded", function(event) {
  const word = getRandomWord(dictionary());
  const wordLetters = getLettersFromWord(word);

  console.log(word);
  console.log(wordLetters);
  console.log(player);
  wordLetters.map(setupCards);

  const svgPaths = ["arm1", "arm2", "arm3", "arm4", "tree", "grave", "moon"];
  const svg = document.getElementById("zombies");
  const svgChildNodes = document.getElementById("zombies").childNodes;
  const svgArray = nodelist2array(svgChildNodes);
  const hideLayer = node =>
    svg.getElementById(node).setAttribute("visibility", "hidden");
  svgPaths.map(hideLayer);
  const showLayer = node =>
    svg.getElementById(node).setAttribute("visibility", "visible");

  const livesDiv = document.getElementById("lives");
  const messageDiv = document.getElementById("message");
  const guessesDiv = document.getElementById("guesses");
  messageDiv.innerHTML = "Please guess a letter";
  livesDiv.innerHTML = player.lives;

  document.onkeyup = function(event) {
    if(player.lives >0){
        if (guessedLetter(player)) {
            messageDiv.innerHTML = "That was a guessed letter";
          } else {
            if (letterInWord(event.key, wordLetters)) {
              messageDiv.innerHTML = "nailed it";
            } else {
              player.lives--;
              livesDiv.innerHTML = player.lives;
              showLayer(svgPaths.pop());
              messageDiv.innerHTML = "close miss!";
            }
            player.guesses.push(event.key);
            guessesDiv.innerHTML = player.guesses
              .map(guess => ` ${guess} `)
              .reduce((x, y) => x + y);
          }
          if (player.lives <= 0) {
            messageDiv.innerHTML = "You're Dead!!!";
          }
          console.log(player);
      }
  };
});
