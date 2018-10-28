function luhnAlg(num) {
  if (isNaN(num)) {
    return false;
  } else {
    const numArray = num.toString().split('');
    let moduloCheck = 0
    for (i = numArray.length - 1; i >= 0; i--) {
      const currentNum = parseInt(numArray[i])
      if (i % 2 !== 0) {
        currentNum * 2 > 10 ? moduloCheck += currentNum * 2 - 9 : moduloCheck += currentNum * 2;
      } else {
        moduloCheck += currentNum;
      }
    }
    return moduloCheck % 10 === 0;
  }
}

module.exports = luhnAlg;