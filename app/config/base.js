/**
 * 基础 配置
 */
/* eslint  no-undef:0 */

// 本地开发打开的路径以及端口
let httpUrl = 'http://localhost:8900/'
let mockURL = 'http://localhost:1111/mock'

// 生产环境用不同的接口地址
if (process.env.NODE_ENV === 'production') {
  httpUrl = 'http://localhost:8900/'
  mockURL = 'http://localhost:1111/mock'
}

const prefix = httpUrl
const suffix = ''
const timeout = 300000

export {
  prefix,
  suffix,
  timeout,
  mockURL,
}