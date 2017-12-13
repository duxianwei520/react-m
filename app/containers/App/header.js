import React, { Component } from 'react'
import { connect } from 'react-redux'
// import CtiContainer from './ctiContainer'

@connect(
  (state, props) => ({ config: state.config })
)
export default class Header extends Component {
  render() {
    const { config } = this.props
    return (
      <header id="navbar">
        
      </header>
    )
  }
}
