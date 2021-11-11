const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter number of turns: ", turns => {
  turns = Number(turns);
  let run = 1;
  if (!Number.isNaN(turns)) {
    while (run <= turns) {
      console.log(`Turn number: ${run}`);
      run += 1;
    }
  }
  readline.close();
});