/*
*
* 某停车厂，3层，每层100车位
* 每个车位都能监控到车辆的驶入和离开
* 车辆进入前，显示每层的空余车位数量
* 车辆进入时，摄像头可识别车牌号和时间
* 车辆出来时，出口显示器显示车牌号和停车时长
*
* */

// 车
class Car {
  constructor(num) {
    this.num = num
  }
}

// 摄像头
class Camera {
  // 拍摄
  shot(car) {
    return {
      content: `车牌号是：${car.num}`,
      time: new Date().getTime()
    }
  }
}

// 出口显示屏
class Screen {
  show(car, time) {
    console.log(`车牌号是 ${car.num}`)
    console.log(`停车时间为 ${new Date().getTime() - time}`)
  }
}

// 停车场
class Park {
  constructor(floors) {
    this.floors = floors || []
    // 摄像头
    this.camera = new Camera()
    // 出口显示屏
    this.screen = new Screen()
    this.carList = {} // 返回摄像头的返回信息
  }

  // 车来了
  in = (car) => {
    // 当有车驶入停车场，用摄像头获取信息
    const info = this.camera.shot(car)
    // 停到某个车位
    const i = parseInt(Math.random() * 100 % 100)
    const place = this.floors[0].places[i]
    place.in()
    info.place = place
    // 记录信息
    this.carList[car.num] = info
  }

  // 车走了
  out = (car) => {
    // 当车离开的时候，获取车的信息
    const info = this.carList[car.num]
    // 停车位清空
    const place = info.place
    place.out()
    // 显示时间
    this.screen.show(car, info.time)
    // 清除记录
    delete this.carList[car.num]
  }

  // 显示空余车位
  emptyNum = () => {
    return this.floors.map(item => {
      return `${item.index} 层还有 ${item.emptyPlaceNum()} 个空余车位`
    }).join("\n")
  }

}

// 层
class Floor {
  constructor(index, places) {
    this.index = index
    this.places = places || []
  }

  emptyPlaceNum() {
    let num = 0
    this.places.forEach(item => {
      if (item.empty) {
        num++
      }
    })

    return num
  }
}

// 车位
class Place {
  constructor() {
    this.empty = true
  }

  in() {
    this.empty = false
  }

  out() {
    this.empty = true
  }

}

// 初始化停车场
const floors = []
// 3层
for (let i = 0; i < 3; i++) {
  // 车位
  const place = []
  for (let j = 0; j < 100; j++) {
    place[j] = new Place()
  }

  floors[i] = new Floor(i + 1, place)
}

console.log(floors)

const park = new Park(floors)

// 初始化车辆
const car1 = new Car('A001',)
const car2 = new Car('A002',)
const car3 = new Car('A003',)

console.log('第一辆车进来了哦')
park.in(car1)
console.log(park.emptyNum())

console.log('第二辆车进来了哦')
park.in(car2)
console.log(park.emptyNum())

console.log('第一辆车离开了哦')
park.out(car1)
console.log('第二辆车离开了哦')
park.out(car2)

console.log('第三辆车进来了哦')
park.in(car3)
console.log(park.emptyNum())

console.log('第三辆车离开了哦')
park.out(car3)
