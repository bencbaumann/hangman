import { getAd } from "./modules/getAd.js";
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
    if (currentLetter.length===1 && game.inProgress ===true) {
      if (game.lives > 0) {
        if (game.guessedLetter(currentLetter, game)) {
          ui.messageDiv.innerHTML = "That was a guessed letter";
        } else {
          if (game.letterInWord(currentLetter, game.wordLetters)) {
            ui.msg("Nailed It", "success");
            // This could be prettier
            game.uniqueLetters = game.uniqueLetters.filter(
              letter => letter !== currentLetter
            );
            if (game.uniqueLetters.length === 0) {
              game.inProgress=false;
              game.wins++;
              ui.setWins();
              // ui.winsDiv.innerHTML = `Wins: ${game.wins} | Losses: ${game.losses}`;
              ui.msg("You Win!", "success");
              ui.showLayer("win");
              ui.showModel();
            }
          } else {
            game.lives--;
            ui.livesDiv.textContent = game.lives;
            ui.showLayer(ui.svgPaths.pop());
            ui.msg("close miss!", "error");
          }
          game.guesses.push(currentLetter);
          ui.guessesDiv.innerHTML = game.guesses
            .map(guess => ` ${guess} `)
            .reduce((x, y) => x + y);
        }
        if (game.lives <= 0) {
          game.inProgress=false;
          game.losses++;
          ui.winsDiv.innerHTML = `Wins: ${game.wins} | Losses: ${game.losses}`;
          ui.msg("You're Dead!!!", "error");
          ui.showLayer("lose");
          ui.showModel();
        }
      } // end if games.lives > 0 

      console.log(game);
    }
    else if(game.inProgress===true){
      ui.msg("Not a letter", "error");
      console.log(currentLetter);
    }
    ui.debug();
  };
});
