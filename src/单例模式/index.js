// 登录框
class LoginForm {
  constructor() {
    this.state = "hide"
  }

  show() {
    if (this.state === "show") {
      alert("已经显示");
      return
    }
    this.state = "show"
    console.log("登录框已经显示")
  }

  hide() {
    if (this.state === "hide") {
      alert("已经隐藏")
      return
    }

    this.state = "hide"
    console.log("登录框已经隐藏")
  }
}

// 单例
LoginForm.getSingle = (function () {
  let single
  return function () {
    if (!single) {
      single = new LoginForm()
    }
    return single
  }
})()

let modal1 = LoginForm.getSingle()
modal1.show()

let modal2 = LoginForm.getSingle()
modal2.show()
