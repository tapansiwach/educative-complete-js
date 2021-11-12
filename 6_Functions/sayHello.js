// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const sayHello = (firstName, lastName) => {
  console.log(`Hello ${firstName} ${lastName}!`);
}

// readline.question("Enter first name: ", fname => {
//   readline.question("Enter last name: ", lname => {
//     sayHello(fname, lname);
//     readline.close();
//   })
// })

const prompt = require('prompt-sync')({ sigint: true });

const fname = prompt("Enter first name: ");
const lname = prompt("Enter last name: ");
sayHello(fname, lname);