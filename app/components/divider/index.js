/*
 * @Author: hy 
 * @Date: 2018-04-28 17:25:56 
 * @Last Modified by: hy
 * @Last Modified time: 2018-04-28 17:29:26
 * 分割线
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Divider extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    return (
      <div className="divider">
        <p className="line pre" />
        <span className="content">{this.props.children}</span>
        <p className="line suf" />
      </div>
    )
  }
}

