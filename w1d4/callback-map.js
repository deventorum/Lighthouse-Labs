let words = ["ground", "control", "to", "major", "tom"];

const ourMap = (arr, callback) => {
  let output = []; 
  arr.forEach(element => {
    output.push(callback(element))
  })
  return output;
}
let result1 = ourMap(words, wordLength);
console.log(result1);
let result2 = ourMap(words, wordUpperCase);
console.log(result2);
let result3 = ourMap(words, reverseWord);
console.log(result3);

/* const ourMap = (arr, callback) => {
  let output=[];
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  }
  words = output;
} */
function wordLength(word) {
  return word.length
}
function wordUpperCase(word) {
  return word.toUpperCase()
}
function reverseWord(word) {
  return word.split('').reverse().join('');
}


