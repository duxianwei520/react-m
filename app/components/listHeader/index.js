/*
 * @Author: hy 
 * @Date: 2018-05-03 10:17:54 
 * @Last Modified by: hy
 * @Last Modified time: 2018-05-03 15:29:38
 * 通用的列表头部，有icon和title
 */


import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.less'

export default class ListHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const { icon, title } = this.props
    return (
      <div className="list-header">
        {
          icon ?
            <span className="list-header-icon"><i className={`qqbicon qqbicon-${icon}`} /></span>
            : null
        }
        <span className="list-header-title">{title}</span>
      </div>
    )
  }
}


