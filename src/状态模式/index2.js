// 有限状态机
import StateMachine from "javascript-state-machine"

// 初始化状态机模型
let fsm = new StateMachine({
    init: "收藏",
    transitions: [
        {
            name: "doStore",
            from: "收藏",
            to: "取消收藏"
        },
        {
            name: "deleteStore",
            from: "取消收藏",
            to: "收藏"
        },
    ],
    methods: {
        // 监听执行收藏
        onDoStore: function () {
            alert("收藏成功")
            updateText()
        },

        // 监听取消收藏
        onDeleteStore: function () {
            alert("取消收藏成功")
            updateText()
        },
    }
})

let dv = document.getElementById("dv")

function updateText() {
    dv.innerText = fsm.state
}

dv.onclick = function () {
    if (fsm.is("收藏")) {
        fsm.doStore()
    } else {
        fsm.deleteStore()
    }
}

updateText()
