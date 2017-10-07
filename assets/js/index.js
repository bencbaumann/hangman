import "../css/reset.css";
import "../css/style.css";
import { gameState } from "./modules/gameState.js";
import { uiState } from "./modules/uiState.js";

document.addEventListener("DOMContentLoaded", function(event) {
  var game = gameState();
  var ui = uiState(game);

  ui.startGame();

  // Event Listenors
  ui.yesPlay.addEventListener("click", () => {
    ui.startGame();
  });
  ui.noPlay.addEventListener("click", () => {
    document.write("<h1>Thanks for Playing</h1>");
  });
  
  document.onkeyup = function(event) {
    const currentLetter = event.key.toLowerCase();
    // Check to see if the game is in progress, and that a letter was pressed.
    if (currentLetter.length === 1 && event.key.toLowerCase().match(/[a-z]{1}/) && game.inProgress === true) {
      // Checks if the player already guessed this letter
      if (game.guessedLetter(currentLetter, game)) {
        ui.messageDiv.innerHTML = "That was a guessed letter";
      } else {
        ui.showGuess(currentLetter);
        ui.updateAd();
        // The player guessed correct
        if (game.letterInWord(currentLetter, game.wordLetters)) {
          ui.msg(ui.getRandomWord(ui.successMessages), "success");
          ui.playSuccess();
          // Remove a guessed letter from the unique letters array
          game.uniqueLetters = game.uniqueLetters.filter(letter => letter !== currentLetter);
          // Checks if the player won
          if (game.uniqueLetters.length === 0) {
            game.inProgress = false;
            game.wins++;
            ui.setWins();
            ui.msg("You Win!", "success");
            ui.showLayer("win");
            ui.showModel();
            ui.playWin();
          }
        } else {
          // The player guessed wrong
          game.lives--;
          ui.livesDiv.textContent = game.lives;
          ui.showLayer(ui.svgPaths.pop());
          ui.msg(ui.getRandomWord(ui.errorMessages), "error");
          ui.playError();
        }
        // Save the current guesses from the game
        game.guesses.push(currentLetter);
        ui.guessesDiv.innerHTML = game.guesses
          .map(guess => ` ${guess} `)
          .reduce((x, y) => x + y);
      }

      // Check to see if the player lost
      if (game.lives <= 0) {
        game.inProgress = false;
        game.losses++;
        ui.setWins();
        ui.msg("You're Dead!!!", "error");
        ui.showLayer("lose");
        ui.showModel();
        ui.playLose();
      }

      console.log(game);
    } else if (game.inProgress === true) {
      ui.msg("Not a letter", "error");
      console.log(currentLetter);
    }
    ui.debug();
  };
});