const countLetters = (str) => {
  let outputObject = {};
  let input = str.split('');
  input.forEach((letter, index) => {
    if (letter !== '') {
      outputObject[letter] === undefined ? outputObject[letter] = [index] : outputObject[letter].push(index);
    }
  })
  return outputObject;
}

console.log(countLetters("lighthouse in the house"));