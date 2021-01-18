class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }

  next() {
    if (this.hasNext()) {
      return this.list[this.index++]
    }
    return null
  }

  hasNext() {
    return this.index < this.list.length;
  }

}

class Container {
  constructor(list) {
    this.list = list
  }

  // 生成遍历器 就， 
  getIterator() {
    return new Iterator(this)
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let cn = new Container(arr)
let each = cn.getIterator()

while (each.hasNext()) {
  console.log(each.next())
}
