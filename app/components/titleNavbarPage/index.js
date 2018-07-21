/*
 * @Author: hy 
 * @Date: 2018-04-28 11:18:33 
 * @Last Modified by: hy
 * @Last Modified time: 2018-05-03 17:15:55
 * 在navbar基础上封装的标题页
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '@components/navbar'
import { withRouter } from 'react-router-dom'

@withRouter
export default class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }
  render() {
    const {
      title = '请取名',
      children,
    } = this.props
    return (
      <div className="page-wrap" >
        <NavBar
          title={title}
        />
        <div className="page-except-header-content">
          {children}
        </div>
      </div>
    )
  }
}


