export function gameState(){
  return {
    "name": "",
    "lives": 7,
    "guesses": [],
    "word": "",
    "uniqueLetters": [],
    "wordLetters": [],
    "reset": function(){
      this.lives=7;
      this.guesses = [];
    }
  }
}