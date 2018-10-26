/* function isPalindrome(s) {
  var stringReverse = s.split(" ").join('').split('').reverse().join("");
  return s.split(" ").join('') == stringReverse;
} */

function isPalindrome(s) {
  s = s.replace(/\s/g, '');
  const stringReverse = s.split('').reverse().join('');
  return s == stringReverse;
}

module.exports = isPalindrome;
