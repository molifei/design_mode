const EventEmitter = require("events").EventEmitter
const fs = require("fs")

const em1 = new EventEmitter()

// let data = '123'
//
// em1.on("some", info => {
//     console.log("fn1", info)
//
//     fs.readFile("./assets/1.txt", function (err, data) {
//         console.log(data.toString())
//         data = data.toString()
//     })
//
//
// })
//
// em1.on("some", info => {
//     console.log("fn2", info)
//     fs.appendFile(
//         "./assets/1.txt",
//         `小明1`,
//         function (err) {
//             console.log(err, 22)
//         })
// })
//
// em1.emit("some", '你好')

class Dog extends EventEmitter {
    constructor(name) {
        super();
        this.name = name
    }
}

let xiaogou = new Dog("小狗")

xiaogou.on('bark', function () {
    console.log(this.name, 'bb')
})

setInterval(function () {
    xiaogou.emit('bark')
}, 1000)
