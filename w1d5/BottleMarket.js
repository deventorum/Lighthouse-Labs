// Taks 1 and Task 2 solutions

/* const bottleChecker = investment => {
  let numBottles = Math.floor(investment / 2);
  let emptyBottles = 0;
  let usedBottles = 0;
  let numberOfCaps = 0
  while(numBottles >= 0) {
    if (emptyBottles >= 2) {
      numBottles++;
      emptyBottles -= 2
      usedBottles += 2
    }
    if (numberOfCaps >=4) {
      numBottles++;
      numberOfCaps -= 4;
    }
    if (numBottles > 0) {
      numBottles--
      emptyBottles++
      numberOfCaps++
    }
    if (numBottles === 0 && emptyBottles === 1) {
      emptyBottles -= 1
      usedBottles += 1
      break
    }
  }
  return usedBottles;
} */

const bottleChecker = investment => {
  let numBottles = Math.floor(investment / 2);
  const boughtBottles = numBottles;
  let recyclingBottles = 0;
  let capBottles = 0;
  let emptyBottles = 0;
  let usedBottles = 0;
  let numberOfCaps = 0
  while(numBottles >= 0) {
    if (emptyBottles >= 2) {
      numBottles++;
      emptyBottles -= 2
      usedBottles += 2
      recyclingBottles++
    }
    if (numberOfCaps >=4) {
      numBottles++;
      numberOfCaps -= 4;
      capBottles++
    }
    if (numBottles > 0) {
      numBottles--
      emptyBottles++
      numberOfCaps++
    }
    if (numBottles === 0 && emptyBottles === 1) {
      usedBottles += 1
      break
    }
  }
  return {
    'Investment': investment,
    'Purchased Bottles': boughtBottles,
    'Total Bottles' : usedBottles,
    'Remaining Bottles': emptyBottles,
    'Remaining Caps': numberOfCaps,
    'Total Earned': {
      'BOTTLES': recyclingBottles,
      'CAPS': capBottles
    }
  }
}
console.log(bottleChecker(10));
console.log(bottleChecker(20));
console.log(bottleChecker(30));
console.log(bottleChecker(40));
console.log(bottleChecker(50));