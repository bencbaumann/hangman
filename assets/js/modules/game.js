export function game() {
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var lives = 6;
    var guesses = [];
    const didPlayerLose = () => lives === 0;

    const lettersInWord = selectWordFromDictionary.split("");
    console.log(lettersInWord);
    console.log("lives:" + lives);

    var setupCards = letter => {
      var divLetter = document.createElement("div");
      divLetter.classList = `letter letter${letter}`;
      divLetter.innerHTML = letter;
      const word = document.getElementById("word");
      word.appendChild(divLetter);
    };

    lettersInWord.map(setupCards);

    document.addEventListener("keyup", function(event) {
      if (guesses.includes(event.key)) {
        console.log("You already guessed that letter!");
        return;
      } else {
        guesses.push(event.key);
      }

      console.log(lettersInWord);
      console.log(guesses);
      console.log(lettersInWord.includes(event.key));
      if (lettersInWord.includes(event.key)) {
        let matches = document.getElementsByClassName(`letter${event.key}`);
        var nodes = Array.prototype.slice.call(matches);
        nodes.map(showClass);
      }

      if (!lettersInWord.includes(event.key)) {
        lives--;
        console.log("lives:" + lives);
        if (didPlayerLose()) {
          console.log("Game Over you Lose");
        }
      }
    });

    const showClass = match => match.classList.add("showLetter");
  });
}
