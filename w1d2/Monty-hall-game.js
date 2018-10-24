let doors = ['Goat', 'Goat', 'Goat'];
let doorWithCar = Math.ceil(Math.random() * 3) - 1;
doors[doorWithCar - 1] = 'Car'

// host asks playeer to make a pick
let userChoice = process.argv.slice(2);
let userChoiceInt = Number.parseInt(userChoice)

let player1Choice = userChoiceInt;
let player2Choice = userChoiceInt;

let hostChoice;

player1Choice != 1 && doorWithCar != 1 ? hostChoice = 1 : player1Choice != 2 && doorWithCar != 2 ? hostChoice = 2 : hostChoice = 3;

player1Choice

console.log('Doors:', doors);
