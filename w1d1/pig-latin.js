var args = process.argv.slice(2);

function translator(word) {
  return word.slice(1) + word.charAt(0) + 'ay';
}

const traverse = () => {
  args.forEach(word => {
    console.log(translator(word));
  });
};

traverse();