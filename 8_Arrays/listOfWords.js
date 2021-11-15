const wordsObject = {
  words: [],
  addWord(word) {
    if (!word.endsWith("ing")) {
      this.words.push(word);
    }
  }
}

wordsObject.addWord("Hello");
wordsObject.addWord("World");
wordsObject.addWord("Working");
wordsObject.addWord("London");

console.log(`wordsObject`, wordsObject);

const notCocWords = {
  words: [],
  addWord(word) {
    if (!word.startsWith("Coc")) {
      this.words.push(word);
    }
  }
}

notCocWords.addWord("Cookie");
notCocWords.addWord("Cool");
notCocWords.addWord("Coconut");
notCocWords.addWord("Cook");

console.log(`notCocWords`, notCocWords);