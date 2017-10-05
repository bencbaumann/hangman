import { dictionary } from "./dictionary.js";
import { getRandomWord } from "./getRandomWord.js";
import { getLettersFromWord } from "./getLettersFromWord.js";
import { getUniqueLetters } from "./getUniqueLetters.js";

export function gameState(){
  return {
    "inProgress": true,
    "name": "",
    "lives": 0,
    "guesses": [],
    "word": "",
    "wordLetters": [],
    "uniqueLetters": [],
    "wins": 0,
    "losses": 0,
    "reset": function(){
      this.inProgress = true;
      this.lives=7;
      this.guesses = [];
      this.word = getRandomWord(dictionary());
      this.wordLetters = getLettersFromWord(this.word);
      this.uniqueLetters = getUniqueLetters(this.wordLetters);
    },
    "guessedLetter": function(currentLetter){
      return this.guesses.includes(currentLetter);
    },
    "letterInWord": function(letter){
      let matches = document.getElementsByClassName(`letter${event.key}`);
      var nodes = Array.prototype.slice.call(matches);
      nodes.map(this.showClass);
      return this.word.includes(letter);
    },
    "showClass": function (match) { return match.classList.add("showLetter")}
  }
}


// game.uniqueLetters = game.uniqueLetters.filter(
//   letter => letter !== currentLetter
// );