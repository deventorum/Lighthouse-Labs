/* function multiplier(index) {
  // console.log(`${number => number * index}`);
  return number => number * index;
}

let twice = multiplier(2);

console.log(twice(5));

let twice = number => number * 2 */


function makeIdGenerator() {
  var id = 0;

  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  }
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
var nextId1 = makeIdGenerator();
var nextId2 = makeIdGenerator()

console.log(nextId1()); // Logs: 1
console.log(nextId1()); // Logs: 2
console.log(nextId2()); // Logs: 1
console.log(nextId2()); // Logs: 2


