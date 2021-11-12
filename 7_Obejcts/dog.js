const dog = {
  name: 'Max',
  species: 'Terrier',
  size: 'medium',
  describe() {
    return `Dog: ${this.name} is a ${this.size} ${this.species}`;
  },
  bark() {
    return 'Woof';
  }
}

console.log(dog.describe());
console.log(dog.bark());