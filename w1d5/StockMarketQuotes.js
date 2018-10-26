const stockInput = [45, 24, 35, 31, 40, 38, 11];

const checkForProfit = arr => {
  let maxProfit = 0;
  for (i = 0; i < arr.length; i++) {
    for (k = i + 1; k < arr.length; k++) {
      if (maxProfit < (arr[k] - arr[i])) {
        maxProfit = arr[k] - arr[i];
      }
    }
  }
  return maxProfit !== 0 ? maxProfit : -1;
}
console.log(checkForProfit(stockInput));