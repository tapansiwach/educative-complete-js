const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("How many turns? ", turns => {
  turns = Number(turns);
  if (typeof turns === "number") {
    for (let counter = 1; counter <= turns; counter++) {
      console.log(`Turn number: ${counter}`)
    }
  }
  readline.close();
});