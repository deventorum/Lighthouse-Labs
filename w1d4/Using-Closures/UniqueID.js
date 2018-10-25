function makeLoadedDie() {

  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;
  /* your code here */

  return function() {
    i++;
    return list[i-1];
    /* your code here */
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6