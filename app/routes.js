import React from 'react'
import {
  Route,
  IndexRoute,
} from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import FastClick from 'fastclick'

import App from './containers/App'

window.addEventListener('load', () => {
  FastClick.attach(document.body);
})

@connect(
  (state, props) => ({
    global: state.global,
  }),
  (dispatch) => ({ actions: bindActionCreators({ ...global }, dispatch) })
)
class Transition extends React.Component {
  componentDidMount() {

  }
  render() {
    // console.log(this.props.global)
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName={this.props.global.animateCls || 'normal'}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        // style={{ height: '100%', width: '100%', overflow: 'hidden', top: '0px' }}
      >
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname,
        })}
      </ReactCSSTransitionGroup>
    );
  }
}


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
  const token = sessionStorage.getItem('token')
  if (!token) {
    // replaceState('/login')
    // hashHistory.push('/login')
  }
}

const routes = (
  <Route component={Transition}>
    <Route path="/" component={App} onEnter={isLogin}>
      <IndexRoute getComponent={welcome} />
      <Route path="/welcome" getComponent={welcome} />
      <Route path="/welcome1" getComponent={welcome1} />

    </Route>
    <Route path="/login" getComponent={Login}></Route>
  </Route>
);

export default routes
