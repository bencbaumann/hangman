const showClass = match => match.classList.add("showLetter");

export function guessedLetter(currentLetter, gameState) {
  console.log(gameState);
  console.log(currentLetter);
  return gameState.guesses.includes(currentLetter);
}

export function letterInWord(letter, word){
    let matches = document.getElementsByClassName(`letter${event.key}`);
    var nodes = Array.prototype.slice.call(matches);
    nodes.map(showClass);
    return word.includes(letter);
}

export function setupCards (letter) {
    var divLetter = document.createElement("div");
    divLetter.classList = `letter letter${letter}`;
    divLetter.innerHTML = letter;
    const word = document.getElementById("word");
    word.appendChild(divLetter);
  };

  