import * as ajax from '@utils/ajax'
import { mockURL, httpUrl } from '@config/base'
/* 可以设置多个数据来源 */
const option = { baseURL: mockURL }

// 登录
export const httpLogin = ajax.createHttpPost('/login', option)

// 登出
export const httpLogout= ajax.createHttpPost('/logout')


