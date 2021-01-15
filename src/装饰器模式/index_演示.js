class Circle {
  draw() {
    console.log('画圆')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }

  draw() {
    this.circle.draw()
    this.setBorder(this.circle)
  }

  setBorder(circle) {
    console.log('有边框')
  }
}

let circle = new Circle()
circle.draw()

let borderCircle = new Decorator(circle)
borderCircle.draw()

