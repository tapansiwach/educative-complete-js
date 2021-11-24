// input arrays and return the sum of all the numbers of the sub-arrays
// Input#
const arrays = [[1, 4], [11], [3, 5, 7]];
// Expected output#
31

function findSum(arrays) {
  return arrays
    .map(array => array.reduce((sum, x) => sum + x))
    .reduce((sum, x) => sum + x);
}

console.log(findSum(arrays));