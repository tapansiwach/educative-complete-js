const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter the temperature in Celcius: ", c => {
  const f = c * 1.8 + 32;
  console.log("Temperature in Farhenheit is", f)
  readline.close()
});

/** alternate impementation in broswer with prompt & alert
 * const c = prompt('Enter the temp in Celcius');
 * const f = c * 1.8 + 32;
 * alert(`The temperature in Farhenheit is ${f}`);
 */