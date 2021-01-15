class ReadImg {
  constructor(fileName, dom, fileUrl) {
    this.fileName = fileName
    this.dom = dom
    this.fileUrl = fileUrl
    this.loadFromDisk()
  }

  display() {
    console.log("展示" + this.fileName)
    this.dom.src = this.fileUrl
  }

  loadFromDisk() {
    console.log(`加载${this.fileName}`)
  }
}

class ProxyImg {
  constructor(fileName, dom, fileUrl) {
    this.realImg = new ReadImg(fileName, dom, fileUrl)
  }

  display() {
    this.realImg.display()
  }
}

let img = document.getElementById("img")

let p = new ProxyImg('图片', img, 'http://cdn.wangyankai.top/img/xb.jpg'
)
p.display()
