const numOfRolls = parseInt(process.argv.slice(2));

const rollDice = () => {
 const rolledNum = [];
 for(let i = numOfRolls; i > 0; i--){
   rolledNum.push(Math.ceil(Math.random()*6));
 }
 return `Rolled dice ${numOfRolls} times: ` + rolledNum.join(`, `);
}
console.log(rollDice());