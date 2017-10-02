const showClass = match => match.classList.add("showLetter");

export function guessedLetter(player) {
  return player.guesses.includes(event.key);
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

  