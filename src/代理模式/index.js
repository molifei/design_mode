// 请明星先接洽经纪人
let start = {
  name: "小明",
  age: 20,
  phone: "18888888888"
}

// 经纪人
let agent = new Proxy(start, {
  get: function (target, key) {
    if (key === 'phone') {
      // 经纪人的手机号
      return "17777777777"
    }
    if (key === 'price') {
      // 经纪人报价
      return 120
    }
    return target[key]
  },
  set: function (target, key, value) {
    if (key === 'customPrice') {
      if (value < 100) {
        throw new Error("价钱太低")
      } else {
        target[key] = value
        return true
      }
    }
  }
})
