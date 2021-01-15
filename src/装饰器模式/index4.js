class Math {
  @log
  add(a, b) {
    return a + b
  }
}

function log(target, name, desc) {
  // console.log(target, name, desc)

  let oldValue = desc.value
  console.log(oldValue)

  desc.value = function () {
    console.log(`Calling ${name} with`, arguments)
    return oldValue.apply(this, arguments)
  }

  return desc
}

const math = new Math()
const result = math.add(2, 4)

console.log("result", result)
