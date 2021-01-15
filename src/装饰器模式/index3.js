class Person {
  constructor() {
    this.name = '小明'
    this.age = 20
  }

  @readonly
  getName() {
    return `${this.name},今年${this.age}岁`
  }

}

function readonly(target, name, desc) {
  desc.writable = false
  return desc
}

let per = new Person()
console.log(per.getName())
per.getName = function () {
  console.log(123)
}
console.log(per.getName())
