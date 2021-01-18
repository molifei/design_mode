function each(data) {
    let iterator = data[Symbol.iterator]()
     

    let item = {done: false}

    while (!item.done) {
        item = iterator.next()
        if (!item.done) {
            console.log(item.value)
        }
    }
}

let a = [1, 2, 3]

console.log(each(a));
