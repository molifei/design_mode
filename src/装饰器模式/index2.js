function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo() {
    console.log("foo")
  }
}

@mixins(Foo)
class MyClass {
  constructor(name) {
    this.name = name
  }
}

MyClass.prototype.sex = '男'

let obj = new MyClass('小明')
console.log(obj)
obj.foo()
