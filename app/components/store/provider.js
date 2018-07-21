/**
 * 全局store提供者，改变store的方法都在这里
 */
/* eslint  react/prop-types:0 */
import React, { Component } from 'react'
import StoreContext from './context'

export default class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: this.props.store || {},
      setStore: this.setStore,
      clearStore: this.clearStore,
    }
  }

  /**
   * 设置store的值
   */
  setStore = (key, value) => {
    const { store } = this.state
    store[key] = value
    this.setState({
      store,
    })
  }

  /**
   * @description 清空store
   * @memberof Provider
   */
  clearStore = (key) => {
    const { store } = this.state
    if (key) {
      if (store[key]) {
        delete store[key]
      }
      this.setState({
        store,
      })
    } else {
      this.setState({
        store: {}
      })
    }
  }

  render() {
    return (
      <StoreContext.Provider value={this.state}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}
