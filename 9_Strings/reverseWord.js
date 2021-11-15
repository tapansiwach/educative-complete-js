// Input
reverse("fly");
reverse("beautiful");
// Expected output
"ylf"
"lufituaeb"

function reverse(word) {
  let output = "";
  for (let index = word.length - 1; index >= 0; index--) {
    output += word[index];
  }
  console.log(output);
}