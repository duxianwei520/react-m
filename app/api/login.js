import * as ajax from '@utils/ajax'


// 登录
export const httpLogin = ajax.createHttpPost('/login')

// 登出
export const httpLogout= ajax.createHttpPost('/logout')


