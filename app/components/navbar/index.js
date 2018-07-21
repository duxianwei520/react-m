/*
 * @Author: hy 
 * @Date: 2018-04-28 11:18:33 
 * @Last Modified by: hy
 * @Last Modified time: 2018-04-28 13:35:42
 * 头部导航组件
 */

/* eslint  react/prop-types:0*/
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './index.less'

export default class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    const {
      title = '请取名',
      left,
      right,
    } = this.props
    return (
      <div className="app-navbar" >
        <div onClick={this.props.onClickLeft ? this.props.onClickLeft : () => { }} className="navbar-left textOverflow">{left}</div>
        <div onClick={this.props.onClickTitle ? this.props.onClickTitle : () => { }} className="navbar-title textOverflow">{title}</div>
        <div onClick={this.props.onClickRight ? this.props.onClickRight : () => { }} className="navbar-right textOverflow">{right}</div>
      </div>
    )
  }
}


