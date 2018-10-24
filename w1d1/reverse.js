const myArgs = process.argv.slice(2);
const reverse = arg => {
  let output = '';
  for (let i = arg.length - 1; i >= 0; i--) {
    output += arg.charAt(i)
  }
  return output;
}
const traverse = () => {
  myArgs.forEach(word => {
    console.log(reverse(word));
  })
}
traverse();