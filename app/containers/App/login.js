
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile'
import { createForm } from 'rc-form'
import * as global from 'actions/global'

@createForm()

@connect(
    (state, props) => ({
      config: state.config,
      loginResponse: state.loginResponse,
      global: state.global,
    }),
    dispatch => bindActionCreators({ ...global }, dispatch)
)

export default class Login extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  componentWillMount() {
    // console.log(this.props.currentAnimate('right'))
  }

  handleClick = () => {
    this.customFocusInst.focus();
  }

  render() {
    const { getFieldProps } = this.props.form
    // console.log(this.props)
    return (
      <div className="login">
        <List renderHeader={() => '登录'}>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="auto focus"
            ref={el => this.autoFocusInst = el}
          >用户名</InputItem>
          <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder="click the button below to focus"
            ref={el => this.customFocusInst = el}
          >密码</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              // onClick={this.handleClick}
            >
              <Button
                type="primary"
                href="#/welcome"
                onClick={() => this.props.currentAnimate('left')}
              >登录</Button>
            </div>
          </List.Item>
        </List>


      </div>
    )
  }
}
