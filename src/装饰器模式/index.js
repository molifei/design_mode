import {readonly, deprecate} from "core-decorators"

class Person {
  @readonly
  name() {
    return "小明"
  }

  @deprecate('该方法即将废弃')
  sex() {
    return "男"
  }
}

let p = new Person()
p.sex()
alert(p.name())

p.name = function () {

}


