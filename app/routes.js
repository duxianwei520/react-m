import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Transition from './containers/App/transition'
import App from './containers/App'


// welcome
const welcome = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./pages/welcome').default)
  }, 'welcome')
}

// welcome1
const welcome1 = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./pages/welcome1').default)
  }, 'welcome1')
}

// 登录
const Login = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./containers/App/login').default)
  }, 'login')
}

/* 进入路由的判断*/
function isLogin(nextState, replaceState) {
  // const token = sessionStorage.getItem('token')
  // if (!token) {
    // replaceState('/login')
    // hashHistory.push('/login')
  // }
}

const routes = (
  <Route component={Transition}>
    <Route path="/" component={App} onEnter={isLogin}>
      <IndexRoute getComponent={welcome} />
      <Route path="/welcome" getComponent={welcome} />
      <Route path="/welcome1" getComponent={welcome1} />

    </Route>
    <Route path="/login" getComponent={Login} />
  </Route>
)

export default routes
