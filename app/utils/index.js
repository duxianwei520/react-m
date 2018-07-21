/**
 * 公共工具
 */

// 强制去登录页面，用于不能使用react-route-dom时的跳转，
// 如服务端返回登录过期时
const toLoginPage = () => {
  sessionStorage.clear()
  location.hash = '#/login'
}


// 清除字符串中的空格
const clearSpace = (str) => {
  if (typeof str === 'string') {
    return str.replace(/ /g, '')
  }
}

// 将base64转为blob
const base64ToBlob = (imgBase64) => {
  const bytes = window.atob(imgBase64.split(',')[1])

  const ab = new ArrayBuffer(bytes.length)
  const ui8 = new Uint8Array(ab)
  for (let i = 0; i < bytes.length; i++) {
    ui8[i] = bytes.charCodeAt(i)
  }
  return new Blob([ab], { type: 'image/jpeg' })
}

// 图片按比例转成成base64
const canvasToDataURL = (path, obj, callback) => {
  var img = new Image()
  img.src = path
  img.onload = function () {
    let that = this
    // 默认按比例压缩
    let w = that.width,
      h = that.height,
      scale = w / h
    w = obj.width || w
    h = obj.height || (w / scale)
    let quality = 0.7  // 默认图片质量为0.7
    //生成canvas
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    // 创建属性节点
    let anw = document.createAttribute('width')
    anw.nodeValue = w
    let anh = document.createAttribute('height')
    anh.nodeValue = h
    canvas.setAttributeNode(anw)
    canvas.setAttributeNode(anh)
    ctx.drawImage(that, 0, 0, w, h)
    // 图像质量
    if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
      quality = obj.quality
    }
    // quality值越小，所绘制出的图像越模糊
    let base64 = canvas.toDataURL('image/jpeg', quality)
    // 回调函数返回base64的值
    callback(base64)
  }
}

// 图片压缩
// 读取file对象，按比例压缩成对应的质量
// 返回对应的blob
const photoCompress = (file, obj = { quality: 0.6 }, cb) => {
  const fr = new FileReader()
  fr.onload = () => {
    canvasToDataURL(fr.result, obj, (base64) => {
      if (cb) {
        cb(base64ToBlob(base64))
      }
    })
  }
  fr.readAsDataURL(file)
}


// 公共的图片质量转换
const commonPhotoCompress = (file, callback) => {
  if (file.size / 1024 < 1024) {
    // 小于1MB的不压缩
    callback(file)
  } else if (file.size / 1024 < 5000) {
    // 小于5MB的质量
    photoCompress(file, { quality: 0.4 }, callback)
  } else if (file.size / 1024 < 10000) {
    // 5MB-10MB的质量
    photoCompress(file, { quality: 0.2 }, callback)
  } else if (file.size / 1024 > 10000) {
    // 大于10MB的质量
    photoCompress(file, { quality: 0.1 }, callback)
  } else {
    // 5MB-10MB的质量
    photoCompress(file, { quality: 0.2 }, callback)
  }
}

/**
 * 时间对象格式化
 * @param {Date} date 
 * @param {string} fmt 
 */
const dateFormat = (date = new Date(), fmt = 'yyyy-MM-dd hh:mm:ss') => { // author: meizz
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    // eslint-disable-next-line no-param-reassign
    fmt = fmt.replace(RegExp.$1,
      (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))
  }
  for (const k in o) { // eslint-disable-line no-restricted-syntax
    if (new RegExp(`(${k})`).test(fmt)) {
      // eslint-disable-next-line no-param-reassign
      fmt = fmt.replace(RegExp.$1,
        (RegExp.$1.length === 1) ?
          (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)))
    }
  }
  return fmt
}

/**
 * 返回字符串的字节长度，英文一个，中文两个
 * @param {*} str 
 */
const strLength = (str = '') => {
  let len = str.length
  let num = len
  for (let i = 0; i < len; i++) {
    const cc = str[i].charCodeAt()
    if (cc < 0 || cc > 255) {
      num++
    }
  }
  return num
}
/**
  * @description 校验名字
  * @memberof Xzyk
  */
const validatorName = (rule, value, cb, maxLength) => {

  if (strLength(value) > maxLength) {
    cb(`不大于${maxLength}个字符，中文计算为2个字符。`)
    return
  }
  cb()
}
export {
  toLoginPage,
  clearSpace,
  base64ToBlob,
  dateFormat,
  photoCompress,
  commonPhotoCompress,
  strLength,
  validatorName,
}