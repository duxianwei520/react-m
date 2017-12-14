
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FastClick from 'fastclick'
import 'style/base.less'

@connect(
  (state, props) => ({}),
)
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      FastClick.attach(document.body)
    })
  }
  // region

  // endregion
  render() {
    const { children } = this.props
    return (
      <div id="container" className="">
        {children}
      </div>
    )
  }
}
