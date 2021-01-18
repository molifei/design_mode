class State {
    constructor(color) {
        this.color = color
    }

    handle(context) {
        console.log(`${this.color} light`)
        context.setState(this)
    }
}

class Context {
    constructor(props) {
        this.state = null
    }

    getState() {
        return this.state
    }

    setState(state) {
        this.state = state
    }
}

let context = new Context()

let green = new State("green")
let red = new State("red")
let yellow = new State("yellow")

green.handle(context)
