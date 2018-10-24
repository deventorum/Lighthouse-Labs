var x = 0;
console.log('A:', x);

function a(arg) {
  console.log('B:', x);

  x++;

  console.log('C:', x);
}

console.log('D:', x);

a(x);

console.log('E:', x);