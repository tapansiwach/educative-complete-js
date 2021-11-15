// Input
console.log(palindrome("racecar"));
console.log(palindrome("radar"));
console.log(palindrome("beautiful"));
// Expected output
true
true
false

function palindrome(word) {
  if (word.length === 1 || word.length === 0) return true;
  if (word[0] === word[word.length - 1]) {
    const subWord = word.slice(1, -1);
    return palindrome(subWord);
  } else {
    return false;
  }
}

// // alternate implementation
// function palindrome(word) {
//   const reversedWord = Array.from(word).reverse().join("");
//   return word === reversedWord;
// }