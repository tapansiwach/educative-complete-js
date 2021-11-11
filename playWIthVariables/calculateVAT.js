const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter Raw Price: ", raw => {
  const finalPrice = Number(raw) * 1.206;
  console.log("Final Price:", finalPrice);
  readline.close();
});


/** alternate implementation in browser with prompt & alert
 * const raw = Number(prompt("Enter Raw Price"));
 * alert(`Final Price: ${raw * 1.206}`);
 */

