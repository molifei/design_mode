function* testGenerator() {
    yield 'one'
    yield 'two'
    yield 'three'
    return 'over'
}

let res = testGenerator()
console.log(res)

let item = {done: false}

while (!item.done) {
    item = res.next()
    console.log(item.value)
}
