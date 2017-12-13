
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import '../../style/base.less'

@connect(
    (state, props) => ({}),
    (dispatch) => ({ actions: bindActionCreators({}, dispatch) })
)
export default class App extends Component {
  render() {
    const { location, children } = this.props
    return (
      <div id="container" className="">
        <div className="mainContent">{children}</div>
      </div>
    )
  }
}
