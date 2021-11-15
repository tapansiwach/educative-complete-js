const values = [5, 12, 32, 27, 18, 9];

let max = Math.max(...values);
console.log(`max`, max);

// alternate approach
max = values.reduce((acc, x) => acc > x ? acc : x, Number.NEGATIVE_INFINITY);
console.log(`max`, max);

// another alternate apprach
function findMax(array) {
  let max = Number.NEGATIVE_INFINITY;
  for (element of array) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}
max = findMax(values);
console.log(`max`, max);