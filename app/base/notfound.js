import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { WhiteSpace } from 'antd-mobile'

export default class home extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="nofound-wrap">
        <h2>404</h2>
        <WhiteSpace size="lg" />
        <Link to="/home">回到首页</Link>
      </div>
    )
  }
}
