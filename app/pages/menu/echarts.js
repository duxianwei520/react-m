/*
 * @Author: dupi
 * @Date: 2017-06-28 17:16:12
 * @Last Modified by: duxianwei
 * @Last Modified time: 2017-12-13 11:32:47
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile'


@connect(
  (state, props) => ({
    config: state.config,
  })
)
export default class app extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {

      },
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="btn-container">
        <div>
          <Button>default</Button><WhiteSpace />
          <Button disabled>default disabled</Button><WhiteSpace />
        </div>
      </div>
    )
  }
}
