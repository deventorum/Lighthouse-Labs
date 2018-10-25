function findWaldo(arr, found) {
  /* for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  } */
  arr.forEach((element, index) => {
    if (element === 'Waldo') {
      found (index)
    }
  })
}

function actionWhenFound(arg) {
  console.log(`We found Waldo at ${arg} index`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);