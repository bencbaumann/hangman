import { getRandomWord } from './modules/getRandomWord.js';
import { getLettersFromWord } from './modules/getLettersFromWord.js';
import { dictionary } from './modules/dictionary.js';
import '../css/style.css';
var player = require('./modules/player.json');
import { game } from './modules/game.js';
import { guessedLetter, letterInWord, setupCards } from './modules/game1.js';

document.addEventListener("DOMContentLoaded", function(event) {
const word = 
    getRandomWord(dictionary());
const wordLetters = getLettersFromWord(word);
    

console.log(word);
console.log(wordLetters);
console.log(player);
wordLetters.map(setupCards);

document.onkeyup = function(event){
    if(guessedLetter(player)){
        console.log("That was a guessed letter");
    }
    else{
        if(letterInWord(event.key, wordLetters)){
            console.log("nailed it");
        }
        else{
            player.lives--;
            console.log("close miss");
        }
        player.guesses.push(event.key);
    }
    if(player.lives === 0){
        console.log("DEAD");
    }
    
    console.log(player);
}

});