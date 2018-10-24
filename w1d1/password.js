var args = process.argv.slice(2);
var helper = {
  'a': 4,
  'e': 3,
  'o': 0,
  'l': 1
};
function obfuscate(args) {
  let word = args[0];
  let output = '';
  for (let i = 0; i < word.length; i++) {
    let current = word.charAt(i);
    current.match(/[aelo]/) ? output += helper[current] : output += current;
  }
  return output;
}
console.log(obfuscate(args));