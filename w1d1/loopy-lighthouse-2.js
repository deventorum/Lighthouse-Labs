function loopyLighthouse(range, multiples, words) {  
  for (var i = range[0]; i <= range[1]; i++) {
    let output = '';
    if (i % multiples[0] === 0) {
      output += words[0];
    }
    if (i % multiples[1] === 0) {
      output += words[1];
    }
    console.log(output === '' ? i : output);
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);