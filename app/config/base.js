/**
 * 基础 配置
 */
/* eslint  no-undef:0 */

// 本地开发打开的路径以及端口
let httpUrl = 'http://127.0.0.1:8081/zbapp'

// 生产环境用不同的接口地址
if (process.env.NODE_ENV === 'production') {
  httpUrl = 'http://127.0.0.1:8081/zbapp'
}

const prefix = httpUrl
const suffix = '.json'
const timeout = 300000

export {
  prefix,
  suffix,
  timeout,
}