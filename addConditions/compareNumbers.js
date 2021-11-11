const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a number: ", num1 => {
  readline.question("Enter another number: ", num2 => {
    console.log(`${num1} is ${num1 > num2 ? "bigger" : "smaller"} than ${num2}`);
    readline.close();
  })
});