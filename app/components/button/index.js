
//app按钮

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd-mobile'

export default class MyButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    btntype: PropTypes.string,
  }

  render() {
    let className = 'reset-btn reset-btn-normal'
    const { btntype = 'default' } = this.props
    if (btntype === 'primary') {
      className = 'reset-btn reset-btn-primary'
    }
    return (
      <Button {...this.props} className={className}>
        {this.props.children}
      </Button>
    )
  }
}

