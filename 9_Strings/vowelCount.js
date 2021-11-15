function vowels(word) {
  let counter = 0;
  const vowels = "aeiou";
  for (const char of word.toLowerCase()) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  console.log(counter);
}

// Input
vowels("fly");
vowels("beautiful");
// Expected output
0
5