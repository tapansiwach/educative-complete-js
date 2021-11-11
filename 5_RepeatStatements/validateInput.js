let number = Math.floor(Math.random() * 100);

while (true) {
  console.log(`number`, number);
  if (number < 50) break;

  console.log(`${number} is not less than 50... retrying`);
  number = Math.floor(Math.random() * 100);
}