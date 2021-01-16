const fs = require("fs")

const readStream = fs.createReadStream("./assets/file.txt")

let length = 0

readStream.on("data", function (chunk) {
    let len = chunk.toString().length
    console.log(9, len)
    length += len
})

readStream.on("end", function () {
    console.log("length", length)
})
