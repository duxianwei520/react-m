/*
 * @Author: hy 
 * @Date: 2018-05-07 15:08:19 
 * @Last Modified by: hy
 * @Last Modified time: 2018-05-07 15:35:22
 * 错误拦截组件
 */

/* eslint react/prop-types:*/
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import Button from '@components/button'
import './index.less'

@withRouter
export default class CatchError extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 错误信息
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error, info) {
    this.setState({ error, errorInfo: info })
  }

  /**
   * @description 应用需要重新加载
   * @memberof CatchError
   */
  reload = () => {
    this.props.history.push('/login')
    location.reload()
  }
  render() {
    if (this.state.error) {
      return (
        <div className="carchError-wrap">
          <WingBlank>
            <h2>抱歉，应用弱不禁风，崩溃了...</h2>
            <details className="error-details">
              <summary>查看崩溃详情</summary>
              <h5>错误信息:</h5>
              <p className="error-info">{this.state.error && this.state.error.toString()}</p>
              <h5>堆栈信息:</h5>
              <p className="error-info">{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
            </details>
            <WhiteSpace size="xl" />
            <Button onClick={this.reload}>重新登录</ Button>
            <WhiteSpace size="xl" />
          </WingBlank>
        </div>
      )
    }
    return (this.props.children)
  }
}

