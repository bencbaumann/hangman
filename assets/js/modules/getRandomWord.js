// const selectWordFromDictionary =
//   dictionary[Math.floor(Math.random() * dictionary.length)];
// const lettersInWord = selectWordFromDictionary.split("");
export function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}
