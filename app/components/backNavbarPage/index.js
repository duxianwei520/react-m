/*
 * @Author: hy 
 * @Date: 2018-04-28 11:18:33 
 * @Last Modified by: hy
 * @Last Modified time: 2018-05-21 14:09:19
 * 在navbar基础上封装的返回页
 */

/* eslint  react/prop-types:0*/
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NavBar from '@components/navbar'
// import { Icon } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

@withRouter
export default class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const {
      title = '请取名',
      rightText = '',
      onClickRight = () => { },
    } = this.props
    return (
      <div className="page-wrap" >
        <NavBar
          title={title}
          left={<i className="qqbicon qqbicon-back" />}
          right={rightText}
          onClickLeft={() => { this.props.history && this.props.history.goBack() }}
          onClickRight={onClickRight}
        />
        <div className="page-except-header-content">

          {this.props.children}

        </div>
      </div>
    )
  }
}


