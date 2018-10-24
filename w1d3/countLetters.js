const countLetters = (str) => {
 let outputObject = {};
 let input = str.split(' ').join('').split('');
 input.forEach(letter => {
   outputObject[letter] === undefined ? outputObject[letter] = 1 : outputObject[letter]++
 }) 
 return outputObject;
}
console.log(countLetters("lighthouse in the house"));