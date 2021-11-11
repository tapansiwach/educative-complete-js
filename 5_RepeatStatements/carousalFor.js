const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("How many turns? ", turns => {
  turns = Number(turns);
  let run = 1;
  if (typeof turns === "number") {
    while (run <= turns) {
      console.log(`Turn number: ${run}`);
      run++;
    }
  }
  readline.close();
});