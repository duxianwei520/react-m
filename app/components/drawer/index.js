/*
 * @Author: hy 
 * @Date: 2018-04-28 14:14:28 
 * @Last Modified by: hy
 * @Last Modified time: 2018-04-28 14:57:13
 */

// 抽屉组件


import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.less'

export default class Drawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classNames: ['qqb-drawer-container', 'drawer-content'],
    }
    // 退出时的动画类
    this.exitClassNames = ['qqb-drawer-container exit', 'drawer-content exit']
    // 动画时间
    this.exitTime = 250
  }

  static propTypes = {
    children: PropTypes.object,
    onClose: PropTypes.func,
    width: PropTypes.any,
  }

  /**
   * @description 点击遮罩层，退出
   * @memberof Drawer
   */
  onClick = (e) => {
    if (e.target.classList.contains('qqb-drawer-container')) {
      this.setState({
        classNames: this.exitClassNames,
      }, () => {
        setTimeout(() => {
          this.props.onClose && this.props.onClose()
        }, this.exitTime)
      })
    }
  }
  render() {
    const { classNames } = this.state
    const { width = '75%' } = this.props
    return (
      <div className={classNames[0]} onClick={this.onClick}>
        <div className={classNames[1]} style={{ width: width }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

