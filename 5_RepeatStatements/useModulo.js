let num = 1;
let oddCount = 0;

while (oddCount < 10) {
  if (num % 2 === 1) {
    console.log(`${num} is odd`);
    oddCount++;
  }
  num++;
}