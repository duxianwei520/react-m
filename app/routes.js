
import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import { login } from '@pages/login'
import NOTFOUND from './base/notfound'
import { Home } from './pages/home'
import { example} from '@pages/example'
import Transition from '@components/transition'

const routes = (
  <Transition>
    {/* 登录首页 */}
    <Route exact path="/login" component={login} />
    {/* app首页 */}
    <Route exact path="/home" component={Home} />
    {/* 示例页面 */}
    <Route exact path="/example" component={example} />
    {/* 访问根目录时，跳转到/home */}
    <Redirect exact from="/" to="/login" />
    <Route component={NOTFOUND} />
  </Transition>
)

export default routes
