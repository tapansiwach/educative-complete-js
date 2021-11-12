// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question("Enter a number: ", number => {
//   number = Number(number);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${number} x ${j} = ${number * j}`);
//   }
//   readline.close();
// });



let number = Math.floor(Math.random() * 10);

while (number < 2 || number > 8) {
  console.log(`Number ${number} is not between 2 & 8`);
  number = Math.floor(Math.random() * 10);
}

for (let j = 1; j <= 10; j++) {
  console.log(`${number} x ${j} = ${number * j}`);
}