var myArgs = process.argv.slice(2);
const addCalculator = () => {
  return Number(myArgs[0]) + Number(myArgs[1]);
} 
console.log(addCalculator());