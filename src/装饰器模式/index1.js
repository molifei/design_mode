// @testDesc
// class Demo {
//
// }
//
// function testDesc(target) {
//   target.isDesc = true
// }
//
// alert(Demo.isDesc)

function testDec(isDec) {
  return function (target) {
    target.isDec = isDec
  }
}

@testDec(false)
class Demo {

}

alert(`参数：${Demo.isDec}`)
