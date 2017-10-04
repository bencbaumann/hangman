import { dictionary } from "./dictionary.js";
import { getRandomWord } from "./getRandomWord.js";
import { getLettersFromWord } from "./getLettersFromWord.js";
import { getUniqueLetters } from "./getUniqueLetters.js";

export function gameState(){
  return {
    "name": "",
    "lives": 7,
    "guesses": [],
    "word": getRandomWord(dictionary()),
    "wordLetters": [],
    "uniqueLetters": [],
    "reset": function(){
      this.lives=7;
      this.guesses = [];
      this.word = getRandomWord(dictionary());
      this.wordLetters = getLettersFromWord(game.word);
      this.uniqueLetters = getUniqueLetters(this.wordLetters);
    }
  }
}