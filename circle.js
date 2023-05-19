class Circle {

  radius = 2;
  color = "red";

  getRadius() {
    return `Radius: ${this.radius}`
  }

  set Radius(rad) {
    this.radius = rad;
  }

  getColor() {
    return `Color: ${this.color}`;
  }

  set Color(color) {
    this.color = color;
  }

  toString() {
    return JSON.stringify(this)
  }

  getArea() {
    let area = (this.radius * this.radius * Math.PI)
    return `Area : ${area}`
  }

  getCircumference() {
    let circum = (this.radius * 2 * Math.PI)
    return `Circumference : ${circum}`
  }
}

let circleOne = new Circle()
// let circle
console.log(circleOne)
console.log(circleOne.getRadius())
console.log(circleOne.getColor())
circleOne.Radius = "45"
circleOne.Color = "yellow"
console.log(circleOne)
console.log(circleOne.toString())
console.log(circleOne.getArea())
console.log(circleOne.getCircumference())
