let char = "";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
console.log("Starting Neither 'y', nor 'n' game");
console.log("Choosing random characters");

while (true) {
  if (char === 'y' || char === 'n') break;
  char = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(`Chosen character is ${char}`);
}