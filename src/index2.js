class Index2 {
  constructor(number, name) {
    this.number = number
    this.name = name
  }
}

class KuaiChe extends Index2 {
  constructor(price, ...arg) {
    super(...arg);
    this.price = price
  }
}

class ZhuanChe extends Index2 {
  constructor(number, name) {
    super(number, name);
    this.price = 2
  }
}

class Trip {
  constructor(car, km = 1) {
    this.car = car
    this.km = km
  }

  start() {
    console.log(`行程开始，名称；${this.car.name}，车牌号：${this.car.number}，单价：${this.car.price}`)
  }

  end() {
    console.log(`行程结束：结算金额：${this.car.price * this.km}`)
  }

}

let car = new KuaiChe(1, 'A0001', '宝马')
let trip = new Trip(car,50)

trip.start()
trip.end()
