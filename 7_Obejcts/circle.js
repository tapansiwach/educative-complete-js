const circle = {
  radius: 10,
  circumference() {
    return Math.PI * 2 * this.radius;
  },
  area() {
    return Math.PI * this.radius ** 2
  }
}

console.log(`this circle has a radius of ${circle.radius}, circumference of ${circle.circumference()} and an area of ${circle.area()}`);