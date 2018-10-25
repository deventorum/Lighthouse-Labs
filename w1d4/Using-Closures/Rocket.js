var countdownGenerator = function (x) {

  var startPoint = x;

  return function () {

    startPoint > 0 ? console.log(`T-misus ${startPoint}`) : startPoint === 0 ? console.log("Blast Off!") : console.log("Rockets already gone, bub!")
    startPoint --;
  }
  /* your code here */
};

var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!