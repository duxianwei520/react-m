
import React from 'react'
import {
  Route,
  Redirect,
  HashRouter as Router,
} from 'react-router-dom'
import CatchError from '@components/catchError'
import { login } from '@pages/login'
import NOTFOUND from './base/notfound'
import { Home } from './pages/home'
import { example } from '@pages/example'
// import Transition from '@components/transition'
import CoverRouter from '@components/coverRouter'

const routes = (
  <Router >
    <CatchError>
      {/* 登录首页 */}
      <CoverRouter path="/login" component={login} />
      {/* app首页 */}
      <CoverRouter path="/home" component={Home} />
      {/* 示例页面 */}
      <CoverRouter path="/example" component={example} />
      {/* 访问根目录时，跳转到/home */}
      <Route exact path='/' render={() => {
        return <Redirect from="/" to="/login" />
      }} />

      {/* <Route component={NOTFOUND} /> */}
    </CatchError>
  </Router>
)

export default routes
