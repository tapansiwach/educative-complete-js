const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const sayHello = (firstName, lastName) => {
  console.log(`Hello ${firstName} ${lastName}!`);
}

readline.question("Enter first name: ", fname => {
  readline.question("Enter last name: ", lname => {
    sayHello(fname, lname);
    readline.close();
  })
})