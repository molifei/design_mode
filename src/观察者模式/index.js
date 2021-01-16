class Subject {
    constructor() {
        this.state = 0
        this.observers = []
    }

    getState() {
        return this.state
    }

    setState(state) {
        this.state = state
        this.notifyAllObservers()
    }

    notifyAllObservers() {
        this.observers.forEach(item => {
            item.update()
        })
    }

    attach(observers) {
        this.observers.push(observers)
    }
}

// 观察者
class Observers {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }

    update() {
        console.log(this.subject.state)
        console.log(`${this.name} update , state:${this.subject.getState()} update`)
    }
}

let s = new Subject()
let o1 = new Observers('o1', s)
let o2 = new Observers('o2', s)
let o3 = new Observers('o3', s)

s.setState(1)
