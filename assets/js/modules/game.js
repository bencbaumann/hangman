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
  