
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as global from 'actions/global'

import '../../style/base.less'

@connect(
    (state, props) => ({}),
    (dispatch) => ({ actions: bindActionCreators({ ...global }, dispatch) })
)
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const { location, children } = this.props
    return (
      <div id="container" className="">
        <div className="mainContent">{children}</div>
      </div>
    )
  }
}
