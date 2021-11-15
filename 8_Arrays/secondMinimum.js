const values = [3, 11, 7, 2, 9, 10];

const sortedValues = values.sort((a, b) => a - b);
console.log(`sortedValues`, sortedValues);

const secondMinimum = sortedValues[1];
console.log(`secondMinimum`, secondMinimum);

// alternate approach
// assign the first and second elements of array to be the minimum & second minimum value in the array
let [min, secondMin] = [values[0], values[1]];
if (min > secondMin) {
  [min, secondMin] = [secondMin, min];
}
// loop over the array and reassign min, secondMin
for (let index = 2; index < values.length; index++) {
  const value = values[index];
  if (value < min) {
    min = value;
    secondMin = min;
  } else if (value < secondMin) {
    secondMin = value;
  }
}
console.log(`secondMin`, secondMin);