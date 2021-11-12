function square1(x) {
  return Math.pow(x, 2);
}

// Square the given number x
const square2 = x => Math.pow(x, 2);

console.log(square1(0));
console.log(square1(2));
console.log(square1(5));

console.log(square2(0));
console.log(square2(2));
console.log(square2(5));
