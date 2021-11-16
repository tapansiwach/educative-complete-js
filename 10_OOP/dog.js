class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }

  describe() {
    return `${this.name} is a ${this.species} with size ${this.size}`;
  }

  bark() {
    if (this.size > 60) {
      return "Grrr! Grrr!"
    } else {
      return "Woof! Woof!"
    }
  }
}

const fang = new Dog("Fang", "boarhound", 75);
const snowy = new Dog("snowy", "terrier", 22);

console.log(fang.describe());
console.log(snowy.describe());

console.log("Fang says:", fang.bark());
console.log("Snowy says:", snowy.bark());