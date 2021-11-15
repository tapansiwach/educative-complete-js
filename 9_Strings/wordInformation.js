// Input
length("hello");
lowerCase("BrEak");
upperCase("LiVe");

// Expected output
5
'break'
'LIVE'

function length(word) {
  console.log(word.length);
}

function lowerCase(word) {
  console.log(word.toLowerCase());
}

function upperCase(word) {
  console.log(word.toUpperCase());
}