const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter the starting number: ", start => {
  let num = start;
  let oddCount = 0;

  while (oddCount < 10) {
    if (num % 2 === 1) {
      console.log(`${num} is odd`);
      oddCount++;
    }
    num++;
  }

  readline.close();
});