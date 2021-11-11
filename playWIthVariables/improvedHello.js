const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("What is your first name? ", fname => {
  readline.question("What is your last name? ", lname => {
    console.log(`Hello ${fname} ${lname}`);
    readline.close();
  });
});

/**
 * alternate implementation in browser with prompt & alert
 * const fname = prompt("What is your name?");
 * alert(`Hello ${fname}`);
 */