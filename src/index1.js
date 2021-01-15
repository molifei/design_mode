function loadImg(src) {
  return new Promise(((resolve, reject) => {
    let img = document.createElement("img")
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject({
        img,
        e: "加载失败"
      })
    }

    img.src = src
  }))
}

let src = 'http://cdn.wangyankai.top/img/xb.jpg1'
let result = loadImg(src)

result
  .then(img => {
    alert(`width:${img.width}`)
    return img
  })
  .then(img => {
    alert(`height:${img.height}`)
    return img
  })
  .then(img => {
    document.body.appendChild(img)
  })
  .catch(options => {
    let {img, e} = options
    img.src = 'http://cdn.wangyankai.top/img/ray.jpg'
    document.body.appendChild(img)
    console.log(e)
  })
  .finally(() => {
    console.log("结束")
  })
