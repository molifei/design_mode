const fs = require("fs")
const readLine = require("readline")

let rl = readLine.createInterface({
    input: fs.createReadStream('./assets/file.txt')
})

let lineNum = 0

rl.on("line", function (line) {
    console.log(line)
    lineNum++
})

rl.on("close", function () {
    console.log("lineNum", lineNum)
})
