/*
 * @Author: hy 
 * @Date: 2019-02-27 16:40:54 
 * @Last Modified by: hy
 * @Last Modified time: 2019-03-01 10:33:02
 */

// 覆盖型路由

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
import { withRouter, matchPath } from 'react-router-dom'

// 覆盖页zIndex
const SHOW_PAGE_ZINDEX = 999
// 被覆盖页zIndex
const HIDE_PAGE_ZINDEX = 998
// 正在退出的页面zIndex
const EXIT_PAGE_ZINDEX = 1000
// 包裹页面的容器样式
const CONTAINER_STYLE = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'transparent',
  zIndex: HIDE_PAGE_ZINDEX,
}
// 入场动画名
const ENTER_NAME = 'animation-in'
// 出场动画名
const EXIT_NAME = 'animation-out'


@withRouter
class CoverRouter extends Component {
  constructor(props) {
    super(props)
    // 存储location
    this.previousLocation = props.location
    // 当前dom对象
    this.dom = null
    // 是否卸载
    this.unmount = false
    // 退出动画执行多长时间后卸载(毫秒)
    this.unmountTime = 250
  }


  componentDidUpdate() {
    this.previousLocation = this.props.location
    this.dom = ReactDOM.findDOMNode(this)
  }


  // 路径计算
  computeMatchPath = (path1, path2) => {
    return matchPath(path1,
      {
        path: path2,
        exact: true,
        strict: true,
      })
  }

  // 用于退出动画，
  unmountFun = () => {
    setTimeout(() => {
      this.unmount = true
      this.setState({})
    }, this.unmountTime)
  }


  render() {
    const style = { ...CONTAINER_STYLE }

    const { location, history, path, component: CP } = this.props

    if (this.unmount && history.action !== 'REPLACE') {
      this.unmount = false
      return null
    }

    let mp = this.computeMatchPath(location.pathname, path)
    //替换
    if (history.action === 'REPLACE') {
      if (mp) {
        style.zIndex = SHOW_PAGE_ZINDEX
        this.unmount = false
        return (
          <div style={style} className={ENTER_NAME}>
            <CP {...this.props} match={mp} />
          </div>
        )
      }
    }
    // 入栈
    if (history.action === 'PUSH') {
      // 当前地址和本组件地址相同，覆盖页
      if (mp) {
        style.zIndex = SHOW_PAGE_ZINDEX
        return (
          <div style={style} className={ENTER_NAME}>
            <CP {...this.props} match={mp} />
          </div>
        )
      }

      // 被覆盖的页面
      if (this.dom !== null) {
        return (
          <div style={style}>
            <CP {...this.props} />
          </div>
        )
      }

      // 不关我的事
      if (this.dom === null) {
        return null
      }
    }

    // 出栈
    if (history.action === 'POP') {
      // 上一次地址和本次相同，进入退出流程
      mp = this.computeMatchPath(this.previousLocation.pathname, path)
      if (mp && this.dom !== null) {
        this.unmountFun()
        style.zIndex = EXIT_PAGE_ZINDEX
        return (
          <div style={style} className={EXIT_NAME}>
            <CP {...this.props} match={mp} />
          </div>
        )
      }

      // 显示匹配的被覆盖页
      mp = this.computeMatchPath(location.pathname, path)
      if (this.computeMatchPath(location.pathname, path)) {
        style.zIndex = SHOW_PAGE_ZINDEX
        return (
          <div style={style}>
            <CP {...this.props} match={mp} />
          </div>
        )
      }

      // 另一些被覆盖页
      if (this.dom !== null) {
        return (
          <div style={style}>
            <CP {...this.props} />
          </div>
        )
      }
    }

    return null
  }
}

export default CoverRouter
